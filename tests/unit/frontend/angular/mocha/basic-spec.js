/* jshint ignore:start */
// JSHint doesn't work well with chai

// Angular Mock API: https://docs.angularjs.org/api/ngMock

var expect = chai.expect;

describe("angular basic:", function() {
  var basicService, foo, ajaxService, httpBackend;
  beforeEach(function() {
    module('BasicApp');
    inject(function(_basicService_, _foo_, _ajaxService_, $httpBackend) {
      basicService = _basicService_;
      foo = _foo_;
      ajaxService = _ajaxService_;
      httpBackend = $httpBackend;
    });
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it("has the app", function() {
    expect(BasicApp).to.not.be.undefined;
  });

  it("has a MainCtrl controller", function() {
    expect(BasicApp._invokeQueue[0][2][0]).to.exist;
    expect(BasicApp._invokeQueue[0][2][0]).to.equal('MainCtrl');
  });

  describe("basicService", function() {
    it("exists", function() {
      expect(basicService.addOne).to.not.be.undefined;
    });

    describe("addOne method", function() {
      it("adds one", function() {
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

  describe("ajaxService", function() {
    it("has the getData method", function() {
      expect(ajaxService).to.not.be.undefined;
      expect(ajaxService.getData).to.not.be.undefined;
    });

    it("receives makes the request", function(done) {
      httpBackend.expectGET('/data.json').respond({foo: 'bar'});

      ajaxService.getData(function(result) {
        expect(result.status).to.equal(200);
        expect(result.data).to.be.an('object');
        done();
      });
      
      httpBackend.flush(); // Flush the backend to "execute" the request to do the expectedGET assertion.
    });
  });
});