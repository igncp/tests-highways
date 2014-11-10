(function() {
  var chai, expect, observer, r, sinon, sinonChai, vows, vows_spec;

  vows = require('vows');

  vows_spec = require('vows/lib/vows/reporters/spec');

  chai = require('chai');

  sinonChai = require('sinon-chai');

  chai.use(sinonChai);

  expect = chai.expect;

  sinon = require('sinon');

  r = '../../../../../../../';

  observer = require(r + 'src/backend/nodejs/design-patterns/observer');

  vows.describe('observer.js').addBatch({
    'Observer Design Pattern:': {
      'subject': {
        topic: function() {
          return observer.rockBand;
        },
        'has a observers property that acts as a list': function(rockBand) {
          expect(rockBand.observers).to.be.an.object;
          return expect(rockBand.observers.count()).to.be.a.number;
        },
        'lists observers correctly': function(rockBand) {
          var observersCount;
          observersCount = rockBand.observers.count();
          rockBand.marketing();
          return expect(rockBand.observers.count()).to.equal(observersCount + 1);
        },
        'can get observers': function(rockBand) {
          observer = rockBand.observers.get(0);
          return expect(observer).to.include.keys('update');
        },
        'can remove observers': function(rockBand) {
          rockBand.removeObserver(0);
          return expect(rockBand.observers.count()).to.equal(0);
        }
      },
      'observer': {
        topic: function() {
          return observer.rockBand;
        },
        'gets notified when subject calls `notify`': function(rockBand) {
          rockBand.marketing();
          observer = rockBand.observers.get(0);
          sinon.spy(observer, 'update');
          rockBand.signRight();
          expect(observer.update).to.have.been.calledOnce;
          return expect(observer.update).to.have.been.calledWith('tralara');
        }
      }
    }
  })["export"](module);

}).call(this);
