const assert = require('assert');
const {a39} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a39, 39);
  });
});
