const assert = require('assert');
const {a10} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a10, 10);
  });
});
