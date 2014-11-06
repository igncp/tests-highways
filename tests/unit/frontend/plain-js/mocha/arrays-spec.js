/* jshint ignore:start */
// JSHint doesn't work well with chai

var expect = chai.expect;

describe("arrays.js:", function() {
  var arr;
  beforeEach(function() {
    arr = window.A.arrays;
  });
  
  describe("deepCopy", function() {
    it("doesn't shallow copy a simple array", function() {
      var a = [1, 2];
      var b = arr.deepCopy(a);
      b[0] = 2;
      expect(a[0]).to.equal(1);
    });
  });
});

describe("native methods", function() {
  describe("Array.isArray", function() {
    it("returns true on normal arrays", function() {
      expect(Array.isArray([1, 2, 3])).to.be.true
    });
    it("returns true non-arrays", function() {
      expect(Array.isArray({
        0: 0,
        1: 1,
        length: 2
      })).to.be.false
      expect(Array.isArray("I'm not an array")).to.be.false
    });
    it("arrays of objects", function() {
      expect(Array.isArray([{
        foo: 'foo',
        bar: 'bar'
      }])).to.be.true
    });
  });
  
  describe("Array.prototype.indexOf", function() {
    it("returns index in normal arrays", function() {
      expect([1, 2, 3].indexOf(2)).to.equal(1);
    });
    it("returns -1 if not present", function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
    it("returns index with complex arrays but not referenced object is passed", function() {
      var complexArray = [false, {
        foo: 'foo',
        bar: {
          1: 'one',
          two: 2
        }
      }, -30, NaN]
      expect(complexArray.indexOf(false)).to.equal(0);
      expect(complexArray.indexOf(-30)).to.equal(2);
      expect(complexArray.indexOf({
        foo: 'foo',
        bar: {
          1: 'one',
          two: 2
        }
      })).to.equal(-1);
      expect(complexArray.indexOf(complexArray[1])).to.equal(1);
    });
    it("gets first if they are repeated", function() {
      expect([1,2,3,3,4].indexOf(3)).to.equal(2);
    });
  });

  describe("String.prototype.split", function() {
    it("works without arguments", function() {
      var result = '123'.split();
      expect(result).to.be.an.instanceof(Array);
      expect(result).to.have.length(1);
    });
    it("splits letters if '' is passed", function() {
      var result = '123'.split('');
      expect(result).to.be.an.instanceof(Array);
      expect(result).to.have.length(3);
      expect(result).to.include('1');
    });
  });
});
