# Inspired in "JavaScript Garden": http://bonsaiden.github.io/JavaScript-Garden

# :: = .prototype.

Foo = -> @value = 'foo'
Foo::FooMethod = -> 1

Bar = -> @value = 'bar'
Bar.prototype = new Foo()
Bar::constructor = Bar
Bar::bar = 'bar'

barInstance = new Bar()

module.exports =
  barInstance: barInstance