const assert = require('assert');
const {a24} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a24, 24);
  });
});
