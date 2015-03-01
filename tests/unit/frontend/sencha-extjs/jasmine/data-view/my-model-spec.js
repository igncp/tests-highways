describe('ExtJS', function() {
  beforeEach(function(done) {
    Ext.onReady(done);
  });

  describe('MyModel', function() {
    var myModel;
    beforeEach(function() {
      myModel = Ext.create('MyApp.MyModel');
    });

    it("passes requirements", function() {
      expect(myModel).toBeDefined();
      expect(myModel.fields.length).toBe(2); // including id
    });
  });
});
