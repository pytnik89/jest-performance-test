const assert = require('assert');
const {a43} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a43, 43);
  });
});
