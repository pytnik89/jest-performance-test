const assert = require('assert');
const {a75} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a75, 75);
  });
});
