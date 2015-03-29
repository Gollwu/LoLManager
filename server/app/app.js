var express = require('express'),
    logger = require('morgan')
    fs = require('fs'),
    bodyParser = require('body-parser'),
    config = require('../config');

var app = express();

/**
 * Prefix routes by /api
 */
var api = express();
app.use('/api', api);

if (config.env == 'dev') {
    app.use(logger('dev'));
}
app.use(bodyParser.json());

/**
 * Include all the moduler in controller/
 * and load it
 */
fs.readdirSync(__dirname + '/controller').forEach(function(name){
    var ctrl = require('./controller/' + name);

    ctrl.api = (ctrl.api == undefined) ? true : ctrl.api;

    if (ctrl.api) {
        api.use(ctrl.base, ctrl.app);
    } else {
        app.use(ctrl.base, ctrl.app);
    }
});

app.listen(3000);
console.log('Listening on port 3000...');

module.exports = app;
