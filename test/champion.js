global.env  = 'prod';
var expect = require('expect.js'),
    request = require('supertest'),
    app = require('../app/app.js'),
    server;


describe('player', function() {

    before(function() {
        var port = process.env.PORT || 3000;
        server = app.listen(port);
    });

    after(function() {
        server.close();
    });

    it('get players', function(done) {
        request(app).get('/api/player')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(done);
    });

    it('get one player', function(done) {
        request(app).get('/api/player/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
    });

    it('get error if player not exists', function(done) {
        request(app).get('/api/player/-1')
            .expect(404)
            .end(done);
    });

});
