const assert = require('assert');
const {a85} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a85, 85);
  });
});
