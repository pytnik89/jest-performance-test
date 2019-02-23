const assert = require('assert');
const {a49} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a49, 49);
  });
});
