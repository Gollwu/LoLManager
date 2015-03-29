global.env  = 'prod';
var expect = require('expect.js'),
    request = require('supertest'),
    lolmanager = require('../src/app.js');

describe('champion', function() {

    it('get champions', function(done) {
        request(lolmanager).get('/api/champion')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(done);
    });

    it('get one champion', function(done) {
        request(lolmanager).get('/api/champion/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
    });

    it('get error if champion not exists', function(done) {
        request(lolmanager).get('/api/champion/-1')
            .expect(404)
            .end(done);
    });

});
