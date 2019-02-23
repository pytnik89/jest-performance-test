const assert = require('assert');
const {a52} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a52, 52);
  });
});
