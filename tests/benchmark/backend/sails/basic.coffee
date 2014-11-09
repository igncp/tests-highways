Benchmark = require 'benchmark'

suite = new Benchmark.Suite()

r = '../../../../'
Sails = require(r + 'src/backend/sails/basic/node_modules/sails')

Sails.lift ->
  console.log 'Start benchmark...'

  suite.add('sails.load + sails.lower:',{
    defer: true
    fn: (deferred)->
      SailsApp = Sails.Sails
      sails = new SailsApp()
      sails.load ->
        sails.lower ->
          deferred.resolve()
  }).on('cycle', (event)->
    console.log(String(event.target))
    Sails.lower()
  ).run({
    async: true
  })