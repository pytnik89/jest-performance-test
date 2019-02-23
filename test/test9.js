const assert = require('assert');
const {a9} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a9, 9);
  });
});
