describe('sencha-extjs:', function() {
  beforeEach(function(done) {
    Ext.onReady(done);
  });

  it('Extjs is loaded', function() {
    expect(Ext).toBeDefined();
  });

  describe('CustomPanel', function() {
    var customPanel;
    beforeEach(function() {
      customPanel = Ext.create('CustomPanel');
    });

    it("is created", function() {
      expect(customPanel).toBeDefined();
    });

    it("has items", function() {
      expect(customPanel.items.length).toBeGreaterThan(0);
    });
  });

  describe("DataView", function() {
    var dataView;
    beforeEach(function() {
      dataView = Ext.create('CustomPanel').down('dataview');
    });

    it("has a store", function() {
      expect(dataView.store).toBeDefined();
      expect(dataView.store).toBeTruthy();
    });

    it("the store is non empty", function() {
      expect(dataView.store.data.length).toBeGreaterThan(0);
    });

    it("the store allow the addition of an arbitrary item", function() {
      var initialLength  = dataView.store.data.length;
      dataView.store.add({foo: 'bar'});
      expect(dataView.store.data.length).toBe(initialLength + 1);
      var newItem = dataView.store.data.last();
      expect(newItem.data.foo).toBe('bar');
    });
  });
});
