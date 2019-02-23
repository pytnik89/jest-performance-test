const assert = require('assert');
const {a87} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a87, 87);
  });
});
