const assert = require('assert');
const {a72} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a72, 72);
  });
});
