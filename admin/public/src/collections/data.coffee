define [
  "backbone"
  "models/data"
], (Backbone, DataModel) ->

  DataCollection = Backbone.Collection.extend
    url: "/crud/data/"
    model: DataModel

