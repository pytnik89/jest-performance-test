const assert = require('assert');
const {a59} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a59, 59);
  });
});
