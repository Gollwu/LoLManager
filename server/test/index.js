var expect = require('expect.js'),
    lolmanager = require('..');

describe('lolmanager', function() {
  it('should say hello', function(done) {
    expect(lolmanager()).to.equal('Hello, world');
    done();
  });
});
