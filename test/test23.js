const assert = require('assert');
const {a23} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a23, 23);
  });
});
