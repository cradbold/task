define [
  "backbone"
  "views/app"
  "views/task-global"
  "models/data"
  "collections/data"
  "backbone-route-filter"
], (Backbone, AppView, TaskGlobalView, DataModel, DataCollection) ->

  AppRouter = Backbone.Router.extend

    routes:
      "":"index"
      "dashboard": "dashboard"

    initialize: ()->
      @layout = new AppView
      
    index : () ->
      @navigate '/dashboard', on
      
    dashboard: ->
      taskGlobalView = new TaskGlobalView
      $("#current-view").html taskGlobalView.render().el
      @data.models.sort (b, c) ->
        (if (b.get("dateAdd") > c.get("dateAdd")) then 1 else (if (b.get("dateAdd") is c.get("dateAdd")) then 0 else -1))
      taskGlobalView.renderData @data 

