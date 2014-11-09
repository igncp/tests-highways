(function() {
  var chai, constructor, expect, r, sinon, vows, vows_spec;

  vows = require('vows');

  vows_spec = require('vows/lib/vows/reporters/spec');

  chai = require('chai');

  expect = chai.expect;

  sinon = require('sinon');

  r = '../../../../../../../';

  constructor = require(r + 'src/backend/nodejs/design-patterns/constructor');

  vows.describe('constructor.js').addBatch({
    'Constructor Design Pattern - Alternative ways of creating an object:': {
      'definingObjectWayOne': {
        topic: function() {
          var foo;
          foo = {};
          constructor.definingObjectWayOne(foo);
          return foo;
        },
        'object has expected properties': function(topic) {
          return expect(topic).to.include.keys('car', 'dateOfBirth', 'hasBeard');
        }
      },
      'definingObjectWayTwo': {
        topic: function() {
          var foo;
          foo = {};
          constructor.definingObjectWayTwo(foo);
          return foo;
        },
        'object has expected properties': function(topic) {
          return expect(topic).to.include.keys('someKey', 'anotherKey');
        },
        'writable: false disables property changes': function(topic) {
          var anotherKeyValue;
          anotherKeyValue = topic.anotherKey;
          topic.anotherKey = 'This will not be saved';
          return expect(topic.anotherKey).to.equal(anotherKeyValue);
        }
      },
      'inheritFromObject': {
        topic: function() {
          var dog;
          dog = constructor.inheritFromObject();
          return dog;
        },
        'the new object inherits properties from the parent object': function(topic) {
          expect(topic).to.respondTo('live');
          expect(topic).not.to.include.keys('isPlant');
          return expect(topic.isPlant).equal(false);
        }
      },
      'prototypedConstructor': {
        topic: function() {
          return constructor.prototypedConstructor();
        },
        'the constructor allows to create different objects': function(Car) {
          var ford, seat;
          ford = new Car('Fiesta', 2002, 10000);
          seat = new Car('Leon', 2010, 500);
          expect(ford.toString()).to.equal('Fiesta has done 10000 miles');
          return expect(ford.toString()).not.to.equal(seat.toString());
        }
      }
    }
  })["export"](module);

}).call(this);
