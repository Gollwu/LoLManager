var express = require('express'),
    logger = require('morgan')
    fs = require('fs');

var app = express();

app.use(logger('dev')); /* 'default', 'short', 'tiny', 'dev' */

/**
 * Include all the moduler in controller/
 * and load it
 */
fs.readdirSync(__dirname + '/controller').forEach(function(name){
    require('./controller/' + name)(app);
});

app.listen(3000);
console.log('Listening on port 3000...');
