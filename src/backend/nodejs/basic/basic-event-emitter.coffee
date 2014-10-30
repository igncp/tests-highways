# http://nodejs.org/api/events.html

EventEmitter = require('events').EventEmitter

simpleEventListener = (obj)->
  emitter = new EventEmitter
  emitter.on 'foo',->
    obj.foo = 'bar'
    emitter.emit 'changed'
  emitter

phoneClass = ->
  class Phone
    EventEmitter.call @

  Phone:: = Object.create EventEmitter::
  Phone::turnMuteOff = -> @emit('receiveCall', 'hi!')
  Phone

module.exports =
  EventEmitter: EventEmitter
  phoneClass: phoneClass
  simpleEventListener: simpleEventListener