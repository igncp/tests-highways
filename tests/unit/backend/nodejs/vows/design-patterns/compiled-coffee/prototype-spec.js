(function() {
  var chai, expect, prototypeP, r, vows, vows_spec;

  vows = require('vows');

  vows_spec = require('vows/lib/vows/reporters/spec');

  chai = require('chai');

  expect = chai.expect;

  r = '../../../../../../../';

  prototypeP = require(r + 'src/backend/nodejs/design-patterns/prototype');

  vows.describe('prototype.js').addBatch({
    'Prototype Design Pattern:': {
      'myPlane': {
        topic: function() {
          return prototypeP.myPlane;
        },
        'has properties as expected': function(myPlane) {
          return expect(myPlane.brand).to.equal('Airbus');
        },
        "as a simple object, it doen't have a prototype": function(myPlane) {
          return expect(myPlane.prototype).to.be.undefined;
        }
      },
      'otherPlane': {
        topic: function() {
          return prototypeP;
        },
        'has a different brand value': function(prototypeP) {
          return expect(prototypeP.otherPlane.brand).not.to.equal(prototypeP.myPlane.brand);
        },
        "it doesn't have a prototype as it is also a simple object": function(prototypeP) {
          return expect(prototypeP.otherPlane.prototype).to.be.undefined;
        },
        'the constructor is the Object function': function(prototypeP) {
          expect(prototypeP.otherPlane).to.be.an["instanceof"](Object);
          return expect(prototypeP.otherPlane.constructor).to.be.eql(Object);
        },
        'Object.create by default sets writable and configurable to false': function(prototypeP) {
          prototypeP.otherPlane.brand = 'Foo';
          return expect(prototypeP.otherPlane.brand).not.to.equal('Foo');
        },
        "however it's possible to set new properties": function(prototypeP) {
          prototypeP.otherPlane.year = '2001';
          return expect(prototypeP.otherPlane.year).to.be.equal('2001');
        }
      }
    }
  })["export"](module);

}).call(this);
