const assert = require('assert');
const {a76} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a76, 76);
  });
});
