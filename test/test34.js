const assert = require('assert');
const {a34} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a34, 34);
  });
});
