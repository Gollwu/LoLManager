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


    it('compilation passing', function(done) {

        request(app).get('/')
        .expect(404)
        .end(done);
    });
});
