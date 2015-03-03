describe('sencha-extjs:', function() {
  beforeEach(function(done) {
    Ext.onReady(done);
  });

  describe('CustomPanel', function() {
    it("is created and has items", function() {
      var customPanel = Ext.create('CustomPanel');
      expect(customPanel).toBeDefined();
      expect(customPanel.items.length).toBeGreaterThan(0);
    });
  });

  describe("DataView", function() {
    var dataView;
    beforeEach(function() {
      dataView = Ext.create('CustomPanel').down('dataview');
    });

    it("has a nonempty store", function() {
      expect(dataView.store).toBeTruthy();
      expect(dataView.store.data.length).toBeGreaterThan(0);
    });

    it("the store allows the addition of an arbitrary item", function() {
      var initialLength  = dataView.store.data.length;
      dataView.store.add({foo: 'bar'});
      expect(dataView.store.data.length).toBe(initialLength + 1);
      var newItem = dataView.store.data.last();
      expect(newItem.data.foo).toBe('bar');
    });
  });
});
