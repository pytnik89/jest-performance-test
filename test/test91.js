const assert = require('assert');
const {a91} = require('../src/root');
describe('jest performance', function() {
  it('should be fast', function() {
    assert.equal(a91, 91);
  });
});
