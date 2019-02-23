const assert = require('assert');
const {a33} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a33, 33);
  });
});
