const assert = require('assert');
const {a96} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a96, 96);
  });
});
