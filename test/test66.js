const assert = require('assert');
const {a66} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a66, 66);
  });
});
