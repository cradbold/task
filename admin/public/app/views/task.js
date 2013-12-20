(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["backbone", "templates", "jquery-serializeObject"], function(Backbone, JST) {
    var TaskView, _ref;
    return TaskView = (function(_super) {
      __extends(TaskView, _super);

      function TaskView() {
        _ref = TaskView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TaskView.prototype.id = "#task-view";

      TaskView.prototype.template = JST["admin/public/templates/task"];

      TaskView.prototype.events = {
        "click .ok": "sent",
        "click .edit": "edit",
        "click .close": "removeView"
      };

      TaskView.prototype.initialize = function(options) {
        this.options = options;
      };

      TaskView.prototype.removeView = function() {
        if (confirm('Remove this item?')) {
          this.options.destroy();
          return this.remove();
        }
      };

      TaskView.prototype.edit = function(e) {
        $(e.target).removeClass("edit").addClass("ok");
        $(e.target).text("OK");
        return $(".data-in", this.el).attr("disabled", false);
      };

      TaskView.prototype.sent = function(e) {
        var a, arr, arrCheck, val1, val2;
        $(e.target).removeClass("ok").addClass("edit");
        $(e.target).text("Edit");
        $(".data-in", this.el).attr("disabled", true);
        val1 = $("#text", this.el).val();
        arr = this.$el.find("input[type='checkbox']:checked");
        arrCheck = [];
        a = 0;
        while (a < arr.length) {
          arrCheck.push($(arr[a]).attr("name"));
          a++;
        }
        val2 = this.$el.find("input[type='radio']:checked").attr("data");
        console.log("val2", val2);
        this.options.set("valArr", arrCheck);
        this.options.set("val1", val1);
        this.options.set("val2", val2);
        return this.options.save();
      };

      TaskView.prototype.renderData = function() {
        var inputArr, val1, val2, valArr,
          _this = this;
        valArr = this.options.get("valArr");
        val1 = this.options.get("val1");
        val2 = this.options.get("val2");
        inputArr = $(".checkbox-cont > input");
        valArr.forEach(function(val) {
          return _this.$el.find("input[name=" + val + "]").attr("checked", true);
        });
        this.$el.find("input[data=" + val2 + "]").attr("checked", true);
        $("#text", this.el).val(val1);
        $(".ok", this.el).removeClass("ok").addClass("edit").text("Edit");
        return $(".data-in", this.el).attr("disabled", true);
      };

      TaskView.prototype.render = function() {
        var id;
        id = this.options.get('_id') || Number(new Date);
        console.log('diddddd', id);
        this.$el.html(this.template({
          id: id
        }));
        return this;
      };

      return TaskView;

    })(Backbone.View);
  });

}).call(this);
