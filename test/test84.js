const assert = require('assert');
const {a84} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a84, 84);
  });
});
