vows = require 'vows'
vows_spec = require 'vows/lib/vows/reporters/spec'
chai = require 'chai'
expect = chai.expect

r = '../../../../../../../'
prototypeP = require r + 'src/backend/nodejs/design-patterns/prototype'

vows
  .describe('prototype.js')
  .addBatch
    'Prototype Design Pattern:':
      'myPlane':
        topic: -> prototypeP.myPlane
        'has properties as expected': (myPlane)->
          expect(myPlane.brand).to.equal 'Airbus'
        "as a simple object, it doen't have a prototype": (myPlane)->
          expect(myPlane.prototype).to.be.undefined
      'otherPlane':
        topic: -> prototypeP
        'has a different brand value': (prototypeP)->
          expect(prototypeP.otherPlane.brand).not.to.equal prototypeP.myPlane.brand
        "it doesn't have a prototype as it is also a simple object": (prototypeP)->
          expect(prototypeP.otherPlane.prototype).to.be.undefined
        'the constructor is the Object function': (prototypeP)->
          expect(prototypeP.otherPlane).to.be.an.instanceof Object
          expect(prototypeP.otherPlane.constructor).to.be.eql Object
        'Object.create by default sets writable and configurable to false': (prototypeP)->
          prototypeP.otherPlane.brand = 'Foo'
          expect(prototypeP.otherPlane.brand).not.to.equal 'Foo'
        "however it's possible to set new properties": (prototypeP)->
          prototypeP.otherPlane.year = '2001'
          expect(prototypeP.otherPlane.year).to.be.equal '2001'



  .export(module)