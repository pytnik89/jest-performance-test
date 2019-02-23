const assert = require('assert');
const {a80} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a80, 80);
  });
});
