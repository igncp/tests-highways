vows = require 'vows'
vows_spec = require 'vows/lib/vows/reporters/spec'
chai = require 'chai'
expect = chai.expect

r = '../../../../../../../'
mediator = require r + 'src/backend/nodejs/design-patterns/mediator'

vows
  .describe('mediator.js')
  .addBatch
    'Mediator Design Pattern:':
      topic: -> 1
      'works': (one)->
        expect(one).to.equal 1

  .export(module)