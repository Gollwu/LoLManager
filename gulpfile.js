'use strict';

var gulp = require('gulp'),
    fs = require('fs'),
    $ = require('gulp-load-plugins')();
$.mainBowerFiles = require('main-bower-files');
$.del = require('del');


var globalConf = require('./config');


var paths = {
    app: 'app/',
    test: 'test/',
    front: 'public/',
    images: 'public/assets/images/',
    fonts: 'public/assets/fonts/',
    fixtures: 'fixtures/',
    upload_fixtures: 'fixtures/upload/',
    dist: 'www/',
    views_dist: 'views'
};

// compress image and copy its
gulp.task('images', function () {
  return gulp.src(paths.images + '**/*')
    .pipe($.imagemin())
    .pipe(gulp.dest(paths.dist + 'assets/images/'));
});

// Copy fonts
gulp.task('fonts', function () {
  return gulp.src(
      $.mainBowerFiles({filter: '**/*.{eot,svg,ttf,woff}'})
      .concat(paths.fonts)
    )
    .pipe($.flatten())
    .pipe(gulp.dest(paths.dist + 'fonts/'));
});

// Copy favicon
gulp.task('misc', function () {
  return gulp.src(paths.front + '**/favicon.*')
    .pipe(gulp.dest(paths.dist));
});



// Load Fixture
gulp.task('fixtures', function () {
    gulp.src(paths.fixtures + 'upload/**/*')
        .pipe(gulp.dest(globalConf.upload_dir));

   fs.readdir(__dirname + '/' + paths.fixtures, function(err, names){
       names.forEach(function(name) {
           if (!fs.statSync(__dirname + '/' + paths.fixtures + name).isDirectory()) {
               require('./'+ paths.fixtures + name);
           }
       });
   });
});


// Load template
gulp.task('scripts', function () {
    gulp.src($.mainBowerFiles({filter: '**/*.js'}))
        .pipe($.uglify())
        .pipe($.concat('vendor.js'))
        .pipe(gulp.dest(paths.dist+ 'scripts/'));

    gulp.src(concat(paths.front + '**/*.js'))
        .pipe($.uglify())
        .pipe($.concat('vendor.js'))
        .pipe(gulp.dest(paths.dist+ 'scripts/'));
});



// Compile js
gulp.task('scripts', function () {
    gulp.src($.mainBowerFiles({filter: '**/*.js'}))
        .pipe($.uglify())
        .pipe($.concat('vendor.js'))
        .pipe(gulp.dest(paths.dist+ 'scripts/'));

    gulp.src(paths.front + '**/*.js')
        .pipe($.uglify())
        .pipe($.concat('app.js'))
        .pipe(gulp.dest(paths.dist+ 'scripts/'));
});


// Compile js
gulp.task('scripts-dev', function () {
    gulp.src($.mainBowerFiles({filter: '**/*.js'}))
        .pipe($.concat('vendor.js'))
        .pipe(gulp.dest(paths.dist+ 'scripts/'));

    gulp.src(paths.front + '**/*.js')
        .pipe($.concat('app.js'))
        .pipe(gulp.dest(paths.dist+ 'scripts/'));
});



// compile scss
gulp.task('styles', function () {

    gulp.src($.mainBowerFiles({filter: '**/*.css' }))
        .pipe($.concat('vendor.css'))
        .pipe(gulp.dest(paths.dist+ 'styles/'));

    gulp.src(paths.front + '*.scss')
        .pipe($.sass())
        .pipe($.concat('app.css'))
        .pipe(gulp.dest(paths.dist+ 'styles/'));
});




// run the mocha test
gulp.task('mocha', function () {
    $.env({
        vars: {
            NODE_ENV: 'TEST',
            PORT: 3001
        }
    });
    return gulp
        .src( [paths.test + '**/*.js'], {read: false})
        .pipe($.coverage.instrument({
            pattern: [paths.app + '**/*.js']
        }))
        .pipe($.mocha({bail: false}))
        .pipe($.coverage.gather())
        .pipe($.coverage.format())
        .pipe(gulp.dest('reports'))
         .once('error', function () {
        })
    ;
});

// run hints
gulp.task('jshint', ['mocha'], function () {
  return gulp.src([paths.app + '**/*.js', paths.front + '**/*.js' ])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});


// Launch the server with node and reload it everytime a file change
gulp.task('serve', ['watch'], function() {
    $.nodemon({
        script: paths.app + "index.js",
        env: {
            NODE_ENV: 'DEV',
            PORT: '3000'
        }
    });
});

// clean the dest file
gulp.task('clean', function (done) {
  $.del([paths.dist +'*', '!' + globalConf.upload_dir, paths.views_dist], done);
});

// Watch for rebuild
gulp.task('watch', ['build'], function(){
    gulp.watch(paths.images + '**/*', ['images']);
    gulp.watch(paths.fonts + '**/*', ['fonts']);
    gulp.watch(paths.front + '**/favicon.*', ['misc']);
    gulp.watch(paths.front + '**/*.js', ['scripts-dev']);
    gulp.watch('bower_components/**/*.js', ['scripts-dev']);
    gulp.watch(paths.front + '**/*css', ['styles']);
    gulp.watch('bower_components/**/*scss', ['styles']);
});

// watch for launch test
gulp.task('watch-test', ['build'], function(){
    gulp.watch([paths.fonts + '**/*.js', paths.app + '**/*.js', paths.test + '**/*.js'], ['test']);
});


gulp.task('test', ['jshint', 'mocha']);
gulp.task('build', ['images', 'fonts', 'misc', 'scripts', 'styles']);
gulp.task('install-dev', ['build', 'apidoc', 'fixtures', 'scripts-dev', 'styles']);
gulp.task('install', ['build', 'fixtures']);
