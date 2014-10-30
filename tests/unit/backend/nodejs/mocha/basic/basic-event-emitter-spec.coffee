r = '../../../../../../'

require(r + 'node_modules/coffee-script') # Some src are coffee-script
chai = require(r + 'node_modules/chai')
expect = chai.expect

basicEventEmitter = require(r + 'src/backend/nodejs/basic/basic-event-emitter')

describe 'Basic EventEmitter:', ->
  describe 'simpleEventListener', ()->
    simpleEventListener = ''
    emitter = ''
    o = {foo: 'foo'}
    
    before ->
      simpleEventListener = basicEventEmitter.simpleEventListener
      emitter = simpleEventListener(o) # In JS, objects are passed by reference
      
    it 'has a listener to a "foo" event', ->
      count = basicEventEmitter.EventEmitter.listenerCount(emitter, 'foo')
      expect(count).to.equal(1)
    
    it 'changes the given object correctly ', (done)->
      emitter.on 'changed', ->
        expect(o.foo).to.equal('bar')
        done()
      emitter.emit 'foo'

  describe 'phoneClass', ()->
    mobile = ''
    before ->
      Phone = basicEventEmitter.phoneClass()
      mobile = new Phone()

    it 'has the methods of EventEmitter', ->
      expect(mobile.on).not.to.be.undefined
      expect(mobile.emit).not.to.be.undefined
      expect(mobile.listeners).not.to.be.undefined

    it 'can `receive calls`', (done)->
      mobile.on 'receiveCall', (message)->
        expect(message).to.equal 'hi!'
        done()
      
      mobile.turnMuteOff()