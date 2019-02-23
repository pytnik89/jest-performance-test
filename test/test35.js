const assert = require('assert');
const {a35} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a35, 35);
  });
});
