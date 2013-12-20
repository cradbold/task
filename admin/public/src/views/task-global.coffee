define [
  "backbone"
  "views/task"
  "models/data"
  "templates"
  "jquery-serializeObject"
], (Backbone, TaskView, DataModel, JST ) ->

  class TaskGlobalView extends Backbone.View

    id: "#task-global-view"

    template: JST["admin/public/templates/task-glabal"]

    events:
      "click #add":"addEl"
      
    initialize: () ->


    renderData: (dataArr) ->
      dataArr.models.forEach (data) =>
        taskView = new TaskView(data)
        $("#container-task").append(taskView.render().el)
        taskView.renderData()

    addEl: () ->
      dataModel = new DataModel()
      taskView = new TaskView(dataModel)
      $("#container-task").append(taskView.render().el)
      dataModel.set("dateAdd", new Date)
      dataModel.save()

    render: (dataArr) ->
      templateUs = _.template(@template())
      @$el.html templateUs()
      @

