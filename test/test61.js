const assert = require('assert');
const {a61} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a61, 61);
  });
});
