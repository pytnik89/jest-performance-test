const assert = require('assert');
const {a57} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a57, 57);
  });
});
