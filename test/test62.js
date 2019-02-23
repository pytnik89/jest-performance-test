const assert = require('assert');
const {a62} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a62, 62);
  });
});
