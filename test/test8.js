const assert = require('assert');
const {a8} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a8, 8);
  });
});
