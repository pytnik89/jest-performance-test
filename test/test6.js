const assert = require('assert');
const {a6} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a6, 6);
  });
});
