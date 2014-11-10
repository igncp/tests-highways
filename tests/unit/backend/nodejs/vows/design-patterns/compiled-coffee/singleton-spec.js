(function() {
  var chai, expect, r, singleton, vows, vows_spec;

  vows = require('vows');

  vows_spec = require('vows/lib/vows/reporters/spec');

  chai = require('chai');

  expect = chai.expect;

  r = '../../../../../../../';

  singleton = require(r + 'src/backend/nodejs/design-patterns/singleton');

  vows.describe('singleton.js').addBatch({
    'Singleton Design Pattern:': {
      'simpleSingleton': {
        topic: function() {
          return singleton.simpleSingleton;
        },
        'it always returns the same instance': function(simpleSingleton) {
          var instance1, instance2;
          instance1 = simpleSingleton.getInstance();
          instance2 = simpleSingleton.getInstance();
          return expect(instance1.getRandomNumber()).to.equal(instance2.getRandomNumber());
        }
      },
      'notSingleton': {
        topic: function() {
          return singleton.notSingleton;
        },
        'it returns a new instance each time': function(notSingleton) {
          var instance1, instance2;
          instance1 = notSingleton.getInstance();
          instance2 = notSingleton.getInstance();
          expect(instance1.getCounter()).not.to.equal(instance2.getCounter());
          return expect(instance1.getCounter() + 1).to.equal(instance2.getCounter());
        }
      },
      'configurableSingleton': {
        topic: function() {
          return singleton.configurableSingleton;
        },
        'has default values': function(configurableSingleton) {
          var instance1;
          instance1 = configurableSingleton.getInstance({});
          expect(instance1).to.include.keys('pointX', 'pointY');
          expect(instance1.pointX).not.to.be.undefined;
          return expect(instance1.pointX).to.be.a('number');
        },
        'allows configuration': function(configurableSingleton) {
          var instance1;
          configurableSingleton.restore();
          instance1 = configurableSingleton.getInstance({
            pointX: 1
          });
          return expect(instance1.pointX).to.equal(1);
        }
      }
    }
  })["export"](module);

}).call(this);
