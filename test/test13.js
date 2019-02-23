const assert = require('assert');
const {a13} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a13, 13);
  });
});
