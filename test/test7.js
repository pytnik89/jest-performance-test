const assert = require('assert');
const {a7} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a7, 7);
  });
});
