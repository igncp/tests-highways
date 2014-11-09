vows = require 'vows'
vows_spec = require 'vows/lib/vows/reporters/spec'
chai = require 'chai'
expect = chai.expect
sinon = require 'sinon'

r = '../../../../../../../'
moduleP = require r + 'src/backend/nodejs/design-patterns/module'

vows
  .describe('module.js')
  .addBatch
    'Module Design Pattern:':
      'object created by the module pattern':
        'the public methods are public': ->
          expect(moduleP.myNamespace).to.include.keys('myPublicVar')
          expect(moduleP.myNamespace).not.to.include.keys('myPrivateVar')
          expect(moduleP.myNamespace).to.respondTo('myPublicFunction')
          expect(moduleP.myNamespace).not.to.respondTo('myPrivateMethod')

    
  .export(module)