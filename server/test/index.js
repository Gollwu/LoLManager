global.env  = 'prod';
var expect = require('expect.js'),
    request = require('supertest'),
    lolmanager = require('../src/app.js');

describe('lolmanager', function() {
    it('compilation passing', function(done) {

        request(lolmanager).get('/')
        .expect(404)
        .end(done);
    });
});
