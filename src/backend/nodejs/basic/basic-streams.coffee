# Inspired in "Stream Handbook": https://github.com/substack/stream-handbook

getDirectOutput = (cb)->
  Readable = require('stream').Readable
  Writable = require('stream').Writable

  rs = Readable()
  ws = Writable()
  directOutput = ''

  ws.on 'finish', -> cb(directOutput)

  # Define custom writer method
  ws._write = (chunk, enc, next)->
    directOutput += chunk
    next()

  rs.push 'foo ' # Starts the stream
  rs.push 'bar'
  rs.push null # Ends the stream

  rs.pipe ws

module.exports =
  getDirectOutput: getDirectOutput