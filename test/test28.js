const assert = require('assert');
const {a28} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a28, 28);
  });
});
