http = require("http")
server = require("./server")

port = 3000

console.log 'port: ', port
#
http.createServer(server).listen port, ->
  console.log "Express server listening on port " + port

