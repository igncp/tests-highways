r = '../../../../../../'

require(r + 'node_modules/coffee-script') # Some src are coffee-script
chai = require(r + 'node_modules/chai')
expect = chai.expect

basicStreams = require(r + 'src/backend/nodejs/basic/basic-streams')

describe 'Basic Streams:', ->
  it 'getDirectOutput gets the right value', (done)->
    basicStreams.getDirectOutput (result)->
      expect(result).to.equal('foo bar')
      done()