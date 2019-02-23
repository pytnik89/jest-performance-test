const assert = require('assert');
const {a36} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a36, 36);
  });
});
