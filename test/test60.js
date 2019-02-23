const assert = require('assert');
const {a60} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a60, 60);
  });
});
