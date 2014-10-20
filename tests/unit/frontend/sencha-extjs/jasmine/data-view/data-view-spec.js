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
});
