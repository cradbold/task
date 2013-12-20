define [
  "backbone"
  "templates"
  "jquery-serializeObject"
], (Backbone, JST) ->

  class TaskView extends Backbone.View

    id: "#task-view"

    template: JST["admin/public/templates/task"]

    events:
      "click .ok"    : "sent"
      "click .edit"  : "edit"
      "click .close" : "removeView"
      
    initialize: (@options) ->
    
    removeView:()->
      if (confirm('Remove this item?'))
        @options.destroy()
        @remove()
    
    edit:(e)->
      $(e.target).removeClass("edit").addClass("ok")
      $(e.target).text("OK")
      $(".data-in",@el).attr("disabled",false)
  
    sent:(e)->
      $(e.target).removeClass("ok").addClass("edit")
      $(e.target).text("Edit")
      $(".data-in",@el).attr("disabled",true)
      
      val1 = $("#text",@el).val()
      
      arr = @$el.find("input[type='checkbox']:checked")
      arrCheck =[]
      a = 0
      while a < arr.length
        arrCheck.push($(arr[a]).attr("name"))
        a++
      
      val2 =  @$el.find("input[type='radio']:checked").attr("data")
      console.log "val2",val2
      @options.set("valArr",arrCheck)
      @options.set("val1",val1)
      @options.set("val2",val2)
      @options.save()

    renderData: ()->
      valArr = @options.get("valArr")
      val1 = @options.get("val1")
      val2 = @options.get("val2")
      inputArr = $(".checkbox-cont > input")
      valArr.forEach (val) =>
        @$el.find("input[name="+val+"]").attr("checked",true)
      @$el.find("input[data="+val2+"]").attr("checked",true)
      $("#text",@el).val(val1)
      $(".ok",@el).removeClass("ok").addClass("edit").text("Edit")
      $(".data-in",@el).attr("disabled",true)


    render: ->
      id = @options.get('_id') || Number new Date
      console.log 'diddddd', id
      @$el.html @template({id: id})
      @

