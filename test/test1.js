const assert = require('assert');
const {a1} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a1, 1);
  });
});
