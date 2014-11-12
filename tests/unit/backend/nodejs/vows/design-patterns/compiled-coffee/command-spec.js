(function() {
  var chai, command, expect, r, vows, vows_spec;

  vows = require('vows');

  vows_spec = require('vows/lib/vows/reporters/spec');

  chai = require('chai');

  expect = chai.expect;

  r = '../../../../../../../';

  command = require(r + 'src/backend/nodejs/design-patterns/command');

  vows.describe('command.js').addBatch({
    'Command Design Pattern:': {
      'badSkater': {
        'the public methods are public': function() {
          return {
            topic: function() {
              return command.badSkater;
            },
            'has the execute property': function(badSkater) {
              return expect(badSkater).to.respondTo('execute');
            },
            'can execute a `method` with arguments': function(badSkater) {
              return expect(badSkater.execute('jump', '1 meter')).to(equal('ugh! I just fell down 1 meter'));
            }
          };
        }
      }
    }
  })["export"](module);

}).call(this);
