(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["backbone", "backbone-relational"], function(Backbone, BackboneRelational) {
    var CustomerModel, _ref;
    return CustomerModel = (function(_super) {
      __extends(CustomerModel, _super);

      function CustomerModel() {
        _ref = CustomerModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CustomerModel.prototype.defaults = {
        val1: "",
        val2: "",
        valArr: []
      };

      CustomerModel.prototype.initialize = function() {
        return CustomerModel.__super__.initialize.apply(this, arguments);
      };

      CustomerModel.prototype.idAttribute = "_id";

      CustomerModel.prototype.url = function() {
        var id, url;
        id = this.get("_id");
        url = "/crud/data/";
        if (id) {
          url += id;
        }
        return url;
      };

      CustomerModel.prototype.defaults = {};

      CustomerModel.prototype.relations = [{}];

      Backbone.Relational.showWarnings = false;

      return CustomerModel;

    })(Backbone.RelationalModel);
  });

}).call(this);
