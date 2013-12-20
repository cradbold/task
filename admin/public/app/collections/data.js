(function() {
  define(["backbone", "models/data"], function(Backbone, DataModel) {
    var DataCollection;
    return DataCollection = Backbone.Collection.extend({
      url: "/crud/data/",
      model: DataModel
    });
  });

}).call(this);
