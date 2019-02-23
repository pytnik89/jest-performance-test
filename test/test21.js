const assert = require('assert');
const {a21} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a21, 21);
  });
});
