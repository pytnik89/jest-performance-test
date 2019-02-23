const assert = require('assert');
const {a94} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a94, 94);
  });
});
