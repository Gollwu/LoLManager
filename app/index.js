
if (! process.env.NODE_ENV) {
    process.env.NODE_ENV = 'PROD';
}


var app = require('./app.js');

var port = process.env.PORT || 3000;
var server = app.listen(port);
console.log('Listening on port '+port+'...');
