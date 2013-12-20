(function() {
  define(["jquery", "router"], function($, AppRouter) {
    var App;
    return App = (function() {
      function App(collections) {
        this.collections = collections;
        this.router = new AppRouter;
        this._bootstrap();
      }

      App.prototype._bootstrap = function() {
        var _this = this;
        $(function() {
          return _this._bindings();
        });
        _.each(this.collections, function(collection, name) {
          return _this.router[name] = collection;
        });
        return this._fetch(function() {
          return Backbone.history.start();
        });
      };

      App.prototype._fetch = function(callback) {
        var errors, models, _done;
        models = _.toArray(this.collections);
        if (!models.length) {
          return callback();
        }
        errors = [];
        _done = _.after(models.length, function() {
          return callback((errors.length ? errors : null));
        });
        return _.each(models, function(model) {
          return model.fetch({
            success: _done,
            error: function(error) {
              errors.push(error);
              return _done();
            }
          });
        });
      };

      App.prototype._bindings = function() {
        $(document).on('submit', 'form.no-submit', function(event) {
          return event.preventDefault();
        });
        return $(document).on('click', 'a.navigate', function(event) {
          var href, options, trigger;
          event.preventDefault();
          options = $(this).data();
          _.defaults(options, {
            trigger: true,
            replace: true,
            href: null
          });
          href = options.href, trigger = options.trigger;
          if (href != null) {
            return app.router.navigate(href, {
              trigger: trigger
            });
          }
        });
      };

      return App;

    })();
  });

}).call(this);
