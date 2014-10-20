Ext.Loader.setConfig({
  enabled: true,
  paths: {
    MyApp: 'simple-app'
  }
});

Ext.require([
  'Ext.data.Model',
  'Ext.data.Store',
  'MyApp.view.Foo'
]);

describe('sencha-extjs:', function() {
  beforeEach(function(done) {
    var ready = false;
    runs(function() {
      Ext.onReady(function() {
        ready = true;
      });
    });
    waitsFor(function() {
      return ready === true;
    }, 'Timed out', 3500);
  });

  it('Jasmine works', function() {
    expect(1).toBe(1);
  });

  it('Extjs works', function() {
    expect(Ext).toBeDefined();
  });

  describe('MyApp.view.Foo', function() {
    var component;
    beforeEach(function() {
      component = Ext.create('MyApp.view.Foo');
    });

    it('creates component', function() {
      expect(component).toBeDefined();
    });

    it('has a store property', function() {
      expect(component.store).toBeDefined();
    });

    it("unityFn works", function() {
      expect(component.unityFn()).toBe(1);
    });

    it("bar event gets fired with firesBarEvent method", function() {
      var spy = jasmine.createSpy('spy');
      component.on('Bar', spy);
      component.fireBarEvent();
      expect(spy).toHaveBeenCalled();
    });

    it("calling asyncFn calls this.serverMethod and returns the right value", function() {
      sinon.stub(component, 'serverMethod', function(cb) {
        cb(1);
      });

      var result;
      component.asyncFn(function(data) {
        result = data;
      });
      expect(component.serverMethod.calledOnce).toBe(true);
      expect(result).toBe(2);
    });
  });
});
