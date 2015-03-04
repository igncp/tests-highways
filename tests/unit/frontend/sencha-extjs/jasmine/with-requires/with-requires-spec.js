describe('sencha-extjs:', function() {
  beforeEach(function(done) {
    runs();
    waitsFor(true);
    Ext.onReady(function() {
      done();
    });
  });

  describe('Foo', function() {
    var component;
    beforeEach(function() {
      component = Ext.create('MyApp.view.Foo');
    });

    it('creates component', function() {
      expect(component).toBeDefined();
    });
  });
});
