global.env  = 'prod';
var expect = require('expect.js'),
    request = require('supertest'),
    lolmanager = require('../src/app.js');

describe('player', function() {

    it('get players', function(done) {
        request(lolmanager).get('/api/player')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(done);
    });

    it('get one player', function(done) {
        request(lolmanager).get('/api/player/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
    });

    it('get error if player not exists', function(done) {
        request(lolmanager).get('/api/player/-1')
            .expect(404)
            .end(done);
    });

});
