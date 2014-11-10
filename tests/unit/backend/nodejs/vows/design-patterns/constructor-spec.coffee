vows = require 'vows'
vows_spec = require 'vows/lib/vows/reporters/spec'
chai = require 'chai'
expect = chai.expect

r = '../../../../../../../'
constructor = require r + 'src/backend/nodejs/design-patterns/constructor'

vows
  .describe('constructor.js')
  .addBatch
    'Constructor Design Pattern - Alternative ways of creating an object:':
      'definingObjectWayOne':
        topic: ->
          foo = {}
          constructor.definingObjectWayOne(foo)
          foo
        'object has expected properties': (topic)->
          expect(topic).to.include.keys('car', 'dateOfBirth', 'hasBeard')
      
      'definingObjectWayTwo':
        topic: ->
          foo = {}
          constructor.definingObjectWayTwo(foo)
          foo
        'object has expected properties': (topic)->
          expect(topic).to.include.keys('someKey', 'anotherKey')
        'writable: false disables property changes': (topic)->
          anotherKeyValue = topic.anotherKey
          topic.anotherKey = 'This will not be saved'
          expect(topic.anotherKey).to.equal(anotherKeyValue)
      
      'inheritFromObject':
        topic: ->
          dog = constructor.inheritFromObject()
          dog
        'the new object inherits properties from the parent object': (topic)->
          expect(topic).to.respondTo('live')
          expect(topic).not.to.include.keys('isPlant') # It isn't a key
          expect(topic.isPlant).equal(false) # but it can be called

      'prototypedConstructor':
        topic: ->
          constructor.prototypedConstructor()
        'the constructor allows to create different objects': (Car)->
          ford = new Car('Fiesta', 2002, 10000)
          seat = new Car('Leon', 2010, 500)
          expect(ford.toString()).to.equal('Fiesta has done 10000 miles')
          expect(ford.toString()).not.to.equal(seat.toString())
    
  .export(module)