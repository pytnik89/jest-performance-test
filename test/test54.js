const assert = require('assert');
const {a54} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a54, 54);
  });
});
