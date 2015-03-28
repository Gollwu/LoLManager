var express = require('express'),
    logger = require('morgan');

var app = express();

app.use(logger('dev')); /* 'default', 'short', 'tiny', 'dev' */

app.base = '/api'; // don't work : THX Daoulas !!!!!!!!!!!


app.get('/helloworld', function(req, res) {
    res.send(['hello', 'world', 'dat']);
});


app.listen(3000);
console.log('Listening on port 3000...');
