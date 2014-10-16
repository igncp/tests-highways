var fs = require('../../../../../src/backend/nodejs/simple');

describe('Simple spec', function() {
  it('jasmine-node works', function() {
    expect(1).toBe(1);
  });

  it('sum wors', function() {
    var result = fs.sum(1, 2);
    expect(result).toBe(3);
  });
});
