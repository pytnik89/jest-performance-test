const assert = require('assert');
const {a3} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a3, 3);
  });
});
