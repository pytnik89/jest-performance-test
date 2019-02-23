const assert = require('assert');
const {a46} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a46, 46);
  });
});
