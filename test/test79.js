const assert = require('assert');
const {a79} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a79, 79);
  });
});
