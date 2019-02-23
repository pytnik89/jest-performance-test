const assert = require('assert');
const {a93} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a93, 93);
  });
});
