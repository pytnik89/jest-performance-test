const assert = require('assert');
const {a92} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a92, 92);
  });
});
