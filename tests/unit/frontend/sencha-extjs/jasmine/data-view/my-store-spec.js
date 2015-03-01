describe('ExtJS', function() {
  beforeEach(function(done) {
    Ext.onReady(done);
  });

  describe('MyStore', function() {
    var myStore;
    beforeEach(function() {
      myStore = Ext.create('MyApp.MyStore');
    });

    it("passes requirements", function() {
      expect(myStore).toBeDefined();
    });

    it("is empty", function() {
      expect(myStore.data.items.length).toBe(0);
    });
  });
});
