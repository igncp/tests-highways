// Suite for the library of jQuery, without source code

describe("jQuery library", function() {
  describe("jQuery.each", function() {
    it("exists", function() {
      expect($.each).toBeDefined();
    });
  });

  describe("jQuery.getJSON", function() {
    beforeEach(function() {
      sinon.stub(jQuery, 'ajax').returns((function() {
        var deferred = jQuery.Deferred();
        setTimeout(function() {
          return deferred.resolve({
            foo: 'foo'
          });
        }, 10);
        return deferred;
      })());
    });

    it("uses jQuery.ajax", function(done) {
      jQuery.getJSON("/some/resource");
      expect(jQuery.ajax.calledOnce).toBe(true);
      expect(jQuery.ajax.getCall(0).args[0].url).toEqual("/some/resource");
      expect(jQuery.ajax.getCall(0).args[0].dataType).toEqual("json");
      jQuery.ajax.getCall(0).returnValue.then(function(data) {
        expect(data).toEqual({
          foo: 'foo'
        });
        done();
      });
    });
  });
});
