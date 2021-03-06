_ = require 'lodash'

vows = require 'vows'
vows_spec = require 'vows/lib/vows/reporters/spec'
chai = require 'chai'
expect = chai.expect
sinon = require 'sinon'

vows
  .describe('Some lodash functions')
  .addBatch
    '_.compact':
      topic: -> _.compact([1,0,1, false])
      
      'removes falsy elements': (topic) ->
        expect(topic.length).to.equal(2)

      'so the 0 is not present': (topic) ->
        expect(topic.indexOf(0)).to.equal(-1)
    
    '_.reduce':
      'when the accumulation function is ∑ (summation)':
        topic: -> _.reduce([1, 2, 3], (sum, num)-> sum + num)

        'returns the sum': (topic)->
          expect(topic).to.equal(1 + 2 + 3)

      'when the accumulation function is Π (multiplication)':
        topic: -> _.reduce([1, 2, 3], (prod, num)-> prod * num)

        'returns the product': (topic)->
          expect(topic).to.equal(1 * 2 * 3)

    '_.bind':
      topic: ->
        Foo = -> null
        Foo::bar = -> @foo
        Foo::bar = _.bind(Foo::bar, {foo: 'bar'})
        Foo
        
      'generated function discards object property': (Foo)->
        foo = new Foo
        foo.foo = 'this will not be considered when using obj.bar()'
        expect(foo.bar()).to.equal('bar')
        
  .run({reporter: vows_spec, watch: true})