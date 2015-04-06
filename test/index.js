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

    it('return the content of www', function(done) {
        request(app).get('/favicon.ico')
        .expect(200)
        .end(done);
    });
});
