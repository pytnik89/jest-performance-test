const assert = require('assert');
const {a50} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a50, 50);
  });
});
