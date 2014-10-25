/* jshint ignore:start */
// JSHint doesn't work well with chai

var expect = chai.expect;

describe("angular basic:", function() {
  it("has the app", function() {
    expect(BasicApp).to.not.be.undefined;
  });

  it("has a MainCtrl controller", function() {
    expect(BasicApp._invokeQueue[0][2][0]).to.exist;
    expect(BasicApp._invokeQueue[0][2][0]).to.equal('MainCtrl');
  });
});