const assert = require('assert');
const {a16} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a16, 16);
  });
});
