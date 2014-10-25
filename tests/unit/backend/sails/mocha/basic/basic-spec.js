/* jshint ignore:start */
// JSHint doesn't work well with .exist

var r = '../../../../../../';
var Sails = require(r + 'src/backend/sails/basic/node_modules/sails');

var chai = require(r + 'node_modules/chai');
var expect = chai.expect;
var should = chai.should;

var assert = require("assert");

describe('Sails - Basic:', function() {
  before("lifts sails", function(done) {
    Sails.lift(function(data) {
      done();
    });
  });

  it("has access to `sails` global", function() {
    expect(sails).to.exist;
  });

  it("has 20 hooks", function() {
    var loadedHooksNumber = Object.keys(sails.hooks).length;
    expect(loadedHooksNumber).to.equal(20);
  });

  after("lowers sails", function(done) {
    Sails.lower(done);
  })
});
