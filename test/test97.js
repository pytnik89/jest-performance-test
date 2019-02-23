const assert = require('assert');
const {a97} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a97, 97);
  });
});
