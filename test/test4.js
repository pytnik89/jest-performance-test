const assert = require('assert');
const {a4} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a4, 4);
  });
});
