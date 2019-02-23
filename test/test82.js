const assert = require('assert');
const {a82} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a82, 82);
  });
});
