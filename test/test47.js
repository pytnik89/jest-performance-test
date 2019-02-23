const assert = require('assert');
const {a47} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a47, 47);
  });
});
