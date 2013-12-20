define [
  "jquery"
  "router"
], ($, AppRouter) ->


  class App

    constructor: (@collections)->
      @router = new AppRouter
      @_bootstrap()


    _bootstrap: ->
      $ =>
        @_bindings()
      _.each @collections, (collection, name)=>
        @router[name] = collection
      @_fetch =>
        Backbone.history.start()


    _fetch: (callback)->
        models = _.toArray @collections
        return callback()  unless models.length
        errors = []
        _done = _.after(models.length, ->
          callback (if errors.length then errors else null)
        )
        _.each models, (model) ->
          model.fetch
            success: _done
            error: (error) ->
              errors.push error
              _done()


    _bindings: ->

      $(document).on 'submit', 'form.no-submit', (event)->
        event.preventDefault()


      $(document).on 'click', 'a.navigate', (event)->
        event.preventDefault()
        options = $(@).data()
        _.defaults options,
          trigger: on
          replace: on
          href: null
        {href, trigger} = options
        if href?
          app.router.navigate href, {trigger}


