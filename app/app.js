var express = require('express'),
    logger = require('morgan'),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    config = require('./config.js'),
    swig = require('swig');

var app = express();


if (process.env.NODE_ENV == 'DEV') {
    app.use(logger('dev'));
}


// Initialize the template engine
app.set('views', __dirname + '/../dist');
app.engine('html', function (filePath, options, callback) {
    // Expose the templated filename to the swig template engine
    var pos = filePath.search('/views/');
    var filename = filePath.substr(pos + '/views/'.length);

    options.filename = (options.filename) ? options.filename : filename;
    swig.renderFile(filePath, options, callback);
});

app.set('view engine', 'html');
app.set('view cache', (process.env.NODE_ENV == 'PROD'));
swig.setDefaults({ cache: (process.env.NODE_ENV == 'PROD' ? 'memory' : false) });


// Expose some parts of the request object to the template
app.use(function(req, res, next){
    res.locals.req = {
        path: req.path,
        params: req.params
    };
    next();
});



/**
 * Include all the moduler in controller/
 * and load it
 */
fs.readdirSync(__dirname + '/controller').forEach(function(name){
    var ctrl = require('./controller/' + name);
    app.use((ctrl.base || '/'), ctrl.app);
});

/**
 * Serve the content of www
 */
app.use(express.static(__dirname + '/../www'));

/**
 * If dev mode, serve the reports
 */
if (process.env.NODE_ENV == 'DEV') {
    app.use('/reports', express.static(__dirname + '/../reports'));
}

module.exports = app;
