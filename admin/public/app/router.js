(function() {
  define(["backbone", "views/app", "views/task-global", "models/data", "collections/data", "backbone-route-filter"], function(Backbone, AppView, TaskGlobalView, DataModel, DataCollection) {
    var AppRouter;
    return AppRouter = Backbone.Router.extend({
      routes: {
        "": "index",
        "dashboard": "dashboard"
      },
      initialize: function() {
        return this.layout = new AppView;
      },
      index: function() {
        return this.navigate('/dashboard', true);
      },
      dashboard: function() {
        var taskGlobalView;
        taskGlobalView = new TaskGlobalView;
        $("#current-view").html(taskGlobalView.render().el);
        this.data.models.sort(function(b, c) {
          if (b.get("dateAdd") > c.get("dateAdd")) {
            return 1;
          } else {
            if (b.get("dateAdd") === c.get("dateAdd")) {
              return 0;
            } else {
              return -1;
            }
          }
        });
        return taskGlobalView.renderData(this.data);
      }
    });
  });

}).call(this);
