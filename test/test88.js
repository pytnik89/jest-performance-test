const assert = require('assert');
const {a88} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a88, 88);
  });
});
