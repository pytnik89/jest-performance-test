const assert = require('assert');
const {a41} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a41, 41);
  });
});