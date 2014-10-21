describe('Promise test:', function() {
  var p;

  beforeEach(function() {
    p = window.plainJS.promise;
  });

  it('q is loaded', function() {
    expect(Q).toBeDefined();
  });

  it('basic promise works', function(done) {
    p.basic().then(function(data) {
      expect(data).toBe(0);
      done();
    });
  });

  it('fails when given the "fail" argument', function(done) {
    p.basic('fail').fail(function(data) {
      expect(data.name).toBeDefined();
      expect(data.name).toBe('Error');
      expect(data.message).toBeDefined();
      expect(data.message).toBeTruthy(); // Not empty
      done();
    });
  });
});
