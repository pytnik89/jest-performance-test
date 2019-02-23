const assert = require('assert');
const {a26} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a26, 26);
  });
});
