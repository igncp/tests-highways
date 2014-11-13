vows = require 'vows'
vows_spec = require 'vows/lib/vows/reporters/spec'
chai = require 'chai'
expect = chai.expect

r = '../../../../../../../'
mixin = require r + 'src/backend/nodejs/design-patterns/mixin'

vows
  .describe('factory.js')
  .addBatch
    'Mixin Design Pattern:':
      topic: -> mixin
      'adds selective methods or all methods': (mixin)->
        airBus = new mixin.Aircraft()
        expect(airBus).not.to.respondTo ['turnOn', 'turnOff']
        mixin.augment(mixin.Aircraft, mixin.Mixin, 'turnOn')
        expect(airBus).to.respondTo 'turnOn'
        mixin.augment(mixin.Aircraft, mixin.Mixin)
        expect(airBus).to.respondTo 'turnOff'

  .export(module)