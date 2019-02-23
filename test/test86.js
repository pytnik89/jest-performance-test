const assert = require('assert');
const {a86} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a86, 86);
  });
});
