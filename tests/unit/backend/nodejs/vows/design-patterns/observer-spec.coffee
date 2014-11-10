vows = require 'vows'
vows_spec = require 'vows/lib/vows/reporters/spec'

chai = require 'chai'
sinonChai = require 'sinon-chai'
chai.use sinonChai
expect = chai.expect

sinon = require 'sinon'

r = '../../../../../../../'
observer = require r + 'src/backend/nodejs/design-patterns/observer'

vows
  .describe('observer.js')
  .addBatch
    'Observer Design Pattern:':
      'subject':
        topic: -> observer.rockBand
        'has a observers property that acts as a list': (rockBand)->
          expect(rockBand.observers).to.be.an.object
          expect(rockBand.observers.count()).to.be.a.number
        'lists observers correctly': (rockBand)->
          observersCount = rockBand.observers.count()
          rockBand.marketing()
          expect(rockBand.observers.count()).to.equal observersCount + 1
        'can get observers': (rockBand)->
          observer = rockBand.observers.get 0
          expect(observer).to.include.keys 'update'
        'can remove observers': (rockBand)->
          rockBand.removeObserver 0
          expect(rockBand.observers.count()).to.equal 0
      'observer':
        topic: -> observer.rockBand
        'gets notified when subject calls `notify`': (rockBand)->
          rockBand.marketing()
          observer = rockBand.observers.get 0
          sinon.spy(observer, 'update')
          rockBand.signRight()
          expect(observer.update).to.have.been.calledOnce
          expect(observer.update).to.have.been.calledWith 'tralara'

  .export(module)