require [
  "app"
  "bootstrap"
  "collections/data"
], (App, Bootstrap, DataCollection) ->

  window.app = new App
    data   : new DataCollection

