vows = require 'vows'
vows_spec = require 'vows/lib/vows/reporters/spec'

chai = require 'chai'
sinonChai = require 'sinon-chai'
chai.use sinonChai
expect = chai.expect

sinon = require 'sinon'

r = '../../../../../../../'
pubsub = require r + 'src/backend/nodejs/design-patterns/publish-subscribe'

vars =
  subscriber: sinon.spy()
  token: ''

vows
  .describe('publish-subscribe.js')
  .addBatch
    'Pub/Sub Design Pattern:':
      'pubsub object':
        topic: pubsub.pubsub
        'follows the required interface': (pubsub)->
          expect(pubsub).to.include.keys('publish', 'subscribe', 'unsubscribe')
        'calls subscribers to expecific topics': (pubsub)->
          vars.token = pubsub.subscribe 'fooTopic', vars.subscriber
          pubsub.publish 'fooTopic', 'FOO!'
          expect(vars.subscriber).to.have.been.calledOnce
          expect(vars.subscriber).to.have.been.calledWith 'fooTopic', 'FOO!'
          vars.subscriber.reset()
        "subscriber doesn't get called after unsubscribe": (pubsub)->
          pubsub.unsubscribe vars.token
          pubsub.publish 'fooTopic', 'BAR!'
          expect(vars.subscriber).not.to.have.been.called


  .export(module)