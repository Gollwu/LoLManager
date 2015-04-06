var Champion = require('../model/champion'),
    express = require('express')
;
var app = express();



/**
 * Home page
 */
app.get('/', function(req, res) {
    res.json({hello: 'world'});
});



/**
 * Return the controller configuration
 */
module.exports = {
    app: app
};
