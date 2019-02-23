const assert = require('assert');
const {a32} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a32, 32);
  });
});
