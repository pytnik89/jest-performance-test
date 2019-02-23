const assert = require('assert');
const {a64} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a64, 64);
  });
});
