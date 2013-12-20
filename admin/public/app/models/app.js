(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["backbone"], function(Backbone) {
    var AppModel, _ref;
    return AppModel = (function(_super) {
      __extends(AppModel, _super);

      function AppModel() {
        _ref = AppModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AppModel.prototype.initialize = function() {
        return AppModel.__super__.initialize.apply(this, arguments);
      };

      AppModel.prototype.defaults = {};

      return AppModel;

    })(Backbone.Model);
  });

}).call(this);
