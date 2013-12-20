(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["backbone", "views/task", "models/data", "templates", "jquery-serializeObject"], function(Backbone, TaskView, DataModel, JST) {
    var TaskGlobalView, _ref;
    return TaskGlobalView = (function(_super) {
      __extends(TaskGlobalView, _super);

      function TaskGlobalView() {
        _ref = TaskGlobalView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TaskGlobalView.prototype.id = "#task-global-view";

      TaskGlobalView.prototype.template = JST["admin/public/templates/task-glabal"];

      TaskGlobalView.prototype.events = {
        "click #add": "addEl"
      };

      TaskGlobalView.prototype.initialize = function() {};

      TaskGlobalView.prototype.renderData = function(dataArr) {
        var _this = this;
        return dataArr.models.forEach(function(data) {
          var taskView;
          taskView = new TaskView(data);
          $("#container-task").append(taskView.render().el);
          return taskView.renderData();
        });
      };

      TaskGlobalView.prototype.addEl = function() {
        var dataModel, taskView;
        dataModel = new DataModel();
        taskView = new TaskView(dataModel);
        $("#container-task").append(taskView.render().el);
        dataModel.set("dateAdd", new Date);
        return dataModel.save();
      };

      TaskGlobalView.prototype.render = function(dataArr) {
        var templateUs;
        templateUs = _.template(this.template());
        this.$el.html(templateUs());
        return this;
      };

      return TaskGlobalView;

    })(Backbone.View);
  });

}).call(this);
