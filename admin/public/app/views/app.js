(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["backbone", "models/app", "templates"], function(Backbone, AppModel, JST) {
    var AppView, _ref;
    return AppView = (function(_super) {
      __extends(AppView, _super);

      function AppView() {
        _ref = AppView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AppView.prototype.el = "#content";

      AppView.prototype.template = JST["admin/public/templates/layout"];

      AppView.prototype.initialize = function(options) {
        this.options = options;
        AppView.__super__.initialize.apply(this, arguments);
        this.model = new AppModel;
        this.listenTo(this.model, 'change', this.render);
        return this.render();
      };

      AppView.prototype.update = function(options, callback) {
        var _ref1;
        if (_.isUndefined(options)) {
          return this.render();
        }
        this.once('rendered', function() {
          return typeof callback === "function" ? callback() : void 0;
        });
        if (_.isFunction(options)) {
          _ref1 = [null, options], options = _ref1[0], callback = _ref1[1];
        }
        return this.model.set(options, {
          trigger: true
        });
      };

      AppView.prototype.render = function() {
        this.$el.html(this.template(this.serialize()));
        return this.trigger('rendered', this);
      };

      AppView.prototype.serialize = function() {
        return {
          title: this.model.get('title')
        };
      };

      return AppView;

    })(Backbone.View);
  });

}).call(this);
