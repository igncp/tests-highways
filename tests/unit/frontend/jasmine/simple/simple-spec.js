describe('Simple test', function() {
  beforeEach(function() {
    this.fs = window.plainJS.simple;
  });

  it('jasmine works', function() {
    expect(1).toBe(1);
  });

  it('sum works', function() {
    var result = this.fs.sum(1,2);
    expect(result).toBe(3);
  });
});