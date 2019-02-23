const assert = require('assert');
const {a83} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a83, 83);
  });
});
