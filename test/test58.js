const assert = require('assert');
const {a58} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a58, 58);
  });
});
