const assert = require('assert');
const {a2} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a2, 2);
  });
});
