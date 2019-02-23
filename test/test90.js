const assert = require('assert');
const {a90} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a90, 90);
  });
});
