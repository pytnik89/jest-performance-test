const assert = require('assert');
const {a51} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a51, 51);
  });
});
