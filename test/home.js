global.env  = 'prod';
var expect = require('expect.js'),
    request = require('supertest'),
    app = require('../app/app.js'),
    server;

describe('lolmanager', function() {
    before(function() {
        var port = process.env.PORT || 3000;
        server = app.listen(port);
    });

    after(function() {
        server.close();
    });

    it('home works', function(done) {
        request(app).get('/')
        .expect(200)
        .end(done);
    });
});
