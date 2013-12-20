define ["backbone", "backbone-relational"], (Backbone, BackboneRelational) ->

  class CustomerModel extends Backbone.RelationalModel

    defaults:{
      val1:""
      val2:""
      valArr:[]
    }

    initialize: ->
      super

    idAttribute: "_id"

    url: ->
      id = @get("_id")
      url = "/crud/data/"
      url += id  if id
      url



        # model app.acl
        # view (1) app.acl
        # draw view (1) on customer item view
        
        

    defaults: {}
    relations: [{}]
    Backbone.Relational.showWarnings = false

