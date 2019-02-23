const assert = require('assert');
const {a27} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a27, 27);
  });
});
