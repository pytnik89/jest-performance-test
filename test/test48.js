const assert = require('assert');
const {a48} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a48, 48);
  });
});
