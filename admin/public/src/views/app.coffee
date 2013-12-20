define [
  "backbone"
  "models/app"
  "templates"
], (Backbone, AppModel, JST) ->

  class AppView extends Backbone.View

    el: "#content"

    template: JST["admin/public/templates/layout"]

    initialize: (@options) ->
      super
      @model = new AppModel
      @listenTo @model, 'change', @render
      @render()

    update: (options, callback)->
      if _.isUndefined(options)
        return @render()
      @once 'rendered', ->
        callback?()
      if _.isFunction(options)
        [options, callback] = [null, options]
      @model.set(options, trigger: on)

    render: ->
      @$el.html @template @serialize()
      @trigger 'rendered', @


    serialize: ->
      title: @model.get('title')
