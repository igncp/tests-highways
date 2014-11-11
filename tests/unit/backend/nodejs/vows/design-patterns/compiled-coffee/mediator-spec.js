(function() {
  var chai, expect, mediator, r, vows, vows_spec;

  vows = require('vows');

  vows_spec = require('vows/lib/vows/reporters/spec');

  chai = require('chai');

  expect = chai.expect;

  r = '../../../../../../../';

  mediator = require(r + 'src/backend/nodejs/design-patterns/mediator');

  vows.describe('mediator.js').addBatch({
    'Mediator Design Pattern:': {
      topic: function() {
        return 1;
      },
      'works': function(one) {
        return expect(one).to.equal(1);
      }
    }
  })["export"](module);

}).call(this);
