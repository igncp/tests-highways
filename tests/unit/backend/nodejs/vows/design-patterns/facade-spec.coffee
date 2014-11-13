vows = require 'vows'
vows_spec = require 'vows/lib/vows/reporters/spec'
chai = require 'chai'
expect = chai.expect

r = '../../../../../../../'
facadeP = require r + 'src/backend/nodejs/design-patterns/facade'

vows
  .describe('facade.js')
  .addBatch
    'Facade Design Pattern:':
      topic: -> facadeP.facade
      'it is a function (in this case, sometimes can be an object)': (facade)->
        expect(facade).to.be.an.instanceof Function
      'can use methods through the interface': (facade)->
        expect(facade({jump: true})).to.equal 'jumping'
        expect(facade({read: true})).to.equal 5
        expect(facade({write: true, val: 2})).to.equal 2
        expect(facade({read: true})).to.equal 2
      "can't call run as it is a private method": (facade)->
        expect(facade({run: true})).to.be.undefined;
      "can't access the _private function directly": (facade)->
        expect((-> facade()._private)).to.throw Error
        expect(facade({_private: true})).to.be.undefined


  .export(module)