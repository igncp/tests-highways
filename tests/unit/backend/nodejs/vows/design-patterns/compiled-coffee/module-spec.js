(function() {
  var chai, expect, moduleP, r, vows, vows_spec;

  vows = require('vows');

  vows_spec = require('vows/lib/vows/reporters/spec');

  chai = require('chai');

  expect = chai.expect;

  r = '../../../../../../../';

  moduleP = require(r + 'src/backend/nodejs/design-patterns/module');

  vows.describe('module.js').addBatch({
    'Module Design Pattern:': {
      'object created by the module pattern': {
        'the public methods are public': function() {
          expect(moduleP.myNamespace).to.include.keys('myPublicVar');
          expect(moduleP.myNamespace).not.to.include.keys('myPrivateVar');
          expect(moduleP.myNamespace).to.respondTo('myPublicFunction');
          return expect(moduleP.myNamespace).not.to.respondTo('myPrivateMethod');
        }
      },
      'cart object': {
        topic: function() {
          return moduleP.cart;
        },
        'stores elements': function(cart) {
          expect(cart.length).to.be.undefined;
          expect(cart.getItemsCount()).to.equal(0);
          cart.addItem('tortellini');
          return expect(cart.getItemsCount()).to.equal(1);
        },
        'addItem method can be chained': function(cart) {
          return expect(cart.addItem('tangerines')).to.equal(cart);
        }
      },
      'exposes the right properties': {
        topic: function() {
          return moduleP.revealingModule;
        },
        "doesn't have access to the privateFunction": function(revealingModule) {
          expect(revealingModule).not.to.include.keys('privateFunction', 'privateVar', 'aliasedVar');
          return expect(revealingModule).to.include.keys('setName', 'getName', 'greeting');
        }
      }
    }
  })["export"](module);

}).call(this);
