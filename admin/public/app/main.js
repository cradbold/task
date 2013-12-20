(function() {
  require(["app", "bootstrap", "collections/data"], function(App, Bootstrap, DataCollection) {
    return window.app = new App({
      data: new DataCollection
    });
  });

}).call(this);
