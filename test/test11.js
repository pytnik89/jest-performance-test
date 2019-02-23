const assert = require('assert');
const {a11} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a11, 11);
  });
});
