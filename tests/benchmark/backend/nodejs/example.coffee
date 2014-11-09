# http://benchmarkjs.com/ example

Benchmark = require 'benchmark'

suite = new Benchmark.Suite

console.log 'Start benchmark...'

suite
  .add('RegExp#test', -> /o/.test('Hello World!'))
  .add('String#indexOf', -> 'Hello World!'.indexOf('o') > -1)
  .add('String#match', -> !!'Hello World!'.match(/o/))
  .on('cycle', (event)-> console.log(String(event.target)))
  .on('complete', -> console.log('Fastest is ' + this.filter('fastest').pluck('name')))
  .run({ 'async': true })
