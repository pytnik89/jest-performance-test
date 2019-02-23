const assert = require('assert');
const {a95} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a95, 95);
  });
});
