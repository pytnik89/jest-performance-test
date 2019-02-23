const assert = require('assert');
const {a18} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a18, 18);
  });
});
