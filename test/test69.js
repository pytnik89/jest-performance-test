const assert = require('assert');
const {a69} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a69, 69);
  });
});
