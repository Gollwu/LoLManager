global.env  = 'prod';
var expect = require('expect.js'),
    request = require('supertest'),
    app = require('../app/app.js'),
    server;

describe('champion', function() {

    before(function() {
        var port = process.env.PORT || 3000;
        server = app.listen(port);
    });

    after(function() {
        server.close();
    });

    it('get champions', function(done) {
        request(app).get('/champion')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(done);
    });

    it('get one champion', function(done) {
        request(app).get('/champion/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
    });

    it('get error if champion not exists', function(done) {
        request(app).get('/champion/-1')
            .expect(404)
            .end(done);
    });

});
