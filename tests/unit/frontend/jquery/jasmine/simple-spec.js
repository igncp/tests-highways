describe("simple file:", function() {
  it("simple is defined", function() {
    expect($.simple).toBeDefined();
  });

  describe("simple plugin:", function() {
    var simple;

    beforeEach(function() {
      simple = $.simple();
    });

    it("has foo property", function() {
      expect(simple.foo).toBeDefined();
    });

    it("has customSelector function", function() {
      expect(simple.customSelector).toBeDefined();
    });

    it("selects the body", function() {
      expect(simple.customSelector('body')[0]).toEqual(document.body);
    });

    it("doesn't have _privateFn", function() {
      expect(Object.getPrototypeOf(simple)._privateFn).toBeUndefined();
    });
  });
  
});