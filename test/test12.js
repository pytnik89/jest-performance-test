const assert = require('assert');
const {a12} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a12, 12);
  });
});
