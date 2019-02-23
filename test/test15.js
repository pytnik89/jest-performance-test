const assert = require('assert');
const {a15} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a15, 15);
  });
});
