const assert = require('assert');
const {a70} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a70, 70);
  });
});
