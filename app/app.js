var express = require('express'),
    logger = require('morgan'),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    config = require('../config.js'),
    swig = require('swig');

var app = express();


if (process.env.NODE_ENV == 'DEV') {
    app.use(logger('dev'));
}



// This is where all the magic happens!
app.set('views', __dirname + '/../dist');
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
console.log( __dirname + '/../dist');

app.set('view cache', (process.env.NODE_ENV == 'PROD'));
swig.setDefaults({ cache: (process.env.NODE_ENV == 'PROD') });


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
 * If dev mode, serve also doc and reports
 */
if (process.env.NODE_ENV == 'DEV') {
    app.use('/doc', express.static(__dirname + '/../doc'));
    app.use('/reports', express.static(__dirname + '/../reports'));
}

module.exports = app;
