const assert = require('assert');
const {a25} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a25, 25);
  });
});
