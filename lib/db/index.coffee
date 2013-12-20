db = "mongodb://localhost:27017/test"
mongoose = require("mongoose")
Schema = mongoose.Schema
l = require("../logger").log

# Connect
mongoose.connect db, (err, res) ->
  console.log "res",err
  if err
    l.log "Mongo: error", err
  else
#    l.info "Succeeded connected to:", path
    l.info "Mongo: succeeded connected"
module.exports =
  Data: require("./models/data")
