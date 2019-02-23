const assert = require('assert');
const {a98} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a98, 98);
  });
});
