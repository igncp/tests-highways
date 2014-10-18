describe('sencha-extjs', function() {
  beforeEach(function(done) {
    var ready = false;
    runs(function() {
      Ext.onReady(function() {
        ready = true;
      });
    });
    waitsFor(function() {
      return ready === true;
    }, 'Timed out', 2000);
  });

  it('Jasmine works', function() {
    expect(1).toBe(1);
  });

  it('Extjs works', function() {
    expect(Ext).toBeDefined();
  });

  it('Creates component', function() {
    var component = Ext.create('FooClass');
    expect(component).toBeDefined();
    expect(component.customFn()).toBe(1);
  });
});
