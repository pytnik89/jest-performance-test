const assert = require('assert');
const {a30} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a30, 30);
  });
});
