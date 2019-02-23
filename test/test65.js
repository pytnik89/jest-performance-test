const assert = require('assert');
const {a65} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a65, 65);
  });
});
