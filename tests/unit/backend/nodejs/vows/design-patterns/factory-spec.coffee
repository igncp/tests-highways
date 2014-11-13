vows = require 'vows'
vows_spec = require 'vows/lib/vows/reporters/spec'
chai = require 'chai'
expect = chai.expect

r = '../../../../../../../'
factory = require r + 'src/backend/nodejs/design-patterns/factory'

vows
  .describe('factory.js')
  .addBatch
    'Factory Design Pattern:':
      topic: ->
        aircraftFactory = new factory.AircraftFactory
        aircraftFactory
      'the created factory is an object': (aircraftFactory)->
        expect(aircraftFactory).to.be.an('Object')
        expect(aircraftFactory.prototype).to.be.undefined
      'the created item with factory is an object with default values': (aircraftFactory)->
        blackHawk = aircraftFactory.buildAircraft {type: 'helicopter', color: 'black', foo: 'bar'}
        expect(blackHawk).to.be.an 'Object'
        expect(blackHawk).to.respondTo 'fly'
        expect(blackHawk.color).to.equal 'black'
        expect(blackHawk.foo).to.be.undefined

  .export(module)