const assert = require('assert');
const {a78} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a78, 78);
  });
});
