const assert = require('assert');
const {a14} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a14, 14);
  });
});
