mongoose = require("mongoose")
findOrCreate = require("mongoose-findorcreate")

DataSchema = new mongoose.Schema
  val1: String
  val2: String
  valArr:
    type: Array
  dateAdd : Date

DataSchema.plugin findOrCreate
DataModel = mongoose.model("data", DataSchema)
module.exports = DataModel

