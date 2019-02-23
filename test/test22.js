const assert = require('assert');
const {a22} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a22, 22);
  });
});
