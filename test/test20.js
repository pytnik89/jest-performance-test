const assert = require('assert');
const {a20} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a20, 20);
  });
});
