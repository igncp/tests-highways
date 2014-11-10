vows = require 'vows'
vows_spec = require 'vows/lib/vows/reporters/spec'
chai = require 'chai'
expect = chai.expect

r = '../../../../../../../'
singleton = require(r + 'src/backend/nodejs/design-patterns/singleton')

vows
  .describe('singleton.js')
  .addBatch
    'Singleton Design Pattern:':
      'simpleSingleton':
        topic: -> singleton.simpleSingleton
        'it always returns the same instance': (simpleSingleton)->
          instance1 = simpleSingleton.getInstance()
          instance2 = simpleSingleton.getInstance()
          expect(instance1.getRandomNumber()).to.equal(instance2.getRandomNumber())
      'notSingleton':
        topic: -> singleton.notSingleton
        'it returns a new instance each time': (notSingleton)->
          instance1 = notSingleton.getInstance()
          instance2 = notSingleton.getInstance()
          expect(instance1.getCounter()).not.to.equal(instance2.getCounter())
          expect(instance1.getCounter() + 1).to.equal(instance2.getCounter())
      'configurableSingleton':
        topic: -> singleton.configurableSingleton
        'has default values': (configurableSingleton)->
          instance1 = configurableSingleton.getInstance({})
          expect(instance1).to.include.keys('pointX', 'pointY')
          expect(instance1.pointX).not.to.be.undefined
          expect(instance1.pointX).to.be.a 'number'
        'allows configuration': (configurableSingleton)->
          configurableSingleton.restore()
          instance1 = configurableSingleton.getInstance({pointX: 1})
          expect(instance1.pointX).to.equal(1)

  .export(module)