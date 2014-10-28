r = '../../../../../../'

require(r + 'node_modules/coffee-script') # Some src are coffee-script
chai = require(r + 'node_modules/chai')
expect = chai.expect

basicPrototype = require(r + 'src/backend/nodejs/basic/basic-prototype')

describe 'Basic Prototype:', ->
  describe 'barInstance:', ->
    barInstance = ''
    before ->
      barInstance = basicPrototype.barInstance

    it "barInstance has the value set in Bar's constructor", ->
      expect(barInstance.value).to.equal 'bar'

    it "has the first __proto__ with Bar's prototype and Foo's instance", ->
      expect(barInstance.__proto__.bar).not.to.be.undefined
      expect(barInstance.__proto__.value).to.equal 'foo'