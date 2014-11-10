vows = require 'vows'
vows_spec = require 'vows/lib/vows/reporters/spec'
chai = require 'chai'
expect = chai.expect

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
      'cart object':
        topic: -> moduleP.cart
        'stores elements': (cart)->
          expect(cart.length).to.be.undefined
          expect(cart.getItemsCount()).to.equal(0)
          cart.addItem 'tortellini'
          expect(cart.getItemsCount()).to.equal(1)
        'addItem method can be chained': (cart)->
          expect(cart.addItem('tangerines')).to.equal(cart)
      'exposes the right properties':
        topic: -> moduleP.revealingModule
        "doesn't have access to the privateFunction": (revealingModule)->
          expect(revealingModule).not.to.include.keys('privateFunction', 'privateVar', 'aliasedVar')
          expect(revealingModule).to.include.keys('setName', 'getName', 'greeting')

  .export(module)