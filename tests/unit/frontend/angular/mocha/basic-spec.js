/* jshint ignore:start */
// JSHint doesn't work well with chai

var expect = chai.expect;

describe("angular basic:", function() {
  var basicService, foo;
  beforeEach(function() {
    module('BasicApp');
    inject(function(_basicService_, _foo_) {
      basicService = _basicService_;
      foo = _foo_;
    });
  });

  it("has the app", function() {
    expect(BasicApp).to.not.be.undefined;
  });

  it("has a MainCtrl controller", function() {
    expect(BasicApp._invokeQueue[0][2][0]).to.exist;
    expect(BasicApp._invokeQueue[0][2][0]).to.equal('MainCtrl');
  });

  describe("BasicService", function() {
    it("exists", function() {
      expect(basicService.addOne).to.not.be.undefined;
    });

    describe("addOne method", function() {
      it("add one", function() {
        expect(basicService.addOne(0)).to.equal(1);
        expect(basicService.addOne(-9)).to.equal(-8);
        expect(basicService.addOne(2.5)).to.equal(3.5);
      });
    });
  });

  describe("foo variable", function() {
    it("has the right value", function() {
      expect(foo).to.equal('bar');
    });
  });
});
