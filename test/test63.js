const assert = require('assert');
const {a63} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a63, 63);
  });
});
