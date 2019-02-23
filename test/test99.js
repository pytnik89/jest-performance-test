const assert = require('assert');
const {a99} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a99, 99);
  });
});
