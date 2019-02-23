const assert = require('assert');
const {a56} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a56, 56);
  });
});
