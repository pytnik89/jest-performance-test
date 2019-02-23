const assert = require('assert');
const {a37} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a37, 37);
  });
});
