require.config

  deps: ['main']

  shim:
    "jquery-serializeObject":
      deps: ["jquery"]

    bootstrap:
      deps: ["jquery"]
      exports: "jquery"

    handlebars:
      exports: "Handlebars"

    underscore:
      exports: "_"

    backbone:
      deps: ["jquery", "underscore"]
      exports: "Backbone"

    "backbone-relational":
      deps: ["backbone"]

    "backbone-forms-bootstrap":
      deps: ["backbone-forms"]
      exports: "Backbone.Form"

    "backbone-forms":
      deps: ["backbone"]

    "backbone-route-filter":
      deps: ["backbone"]

  paths:
    jquery: "../components/jquery/jquery"
    bootstrap: "../components/bootstrap/dist/js/bootstrap.min"
    underscore: "../components/underscore/underscore"
    handlebars: "../components/handlebars.js/dist/handlebars.runtime"
    backbone: "../components/backbone/backbone"
    "backbone-relational": "../components/backbone-relational/backbone-relational"
    "jquery-serializeObject": "../components/jquery-serializeObject/jquery.serializeObject"
    "backbone-forms": "../components/backbone-forms/distribution/backbone-forms"
    "backbone-forms-bootstrap": "lib/backbone-forms-bootstrap"
    "backbone-route-filter": "../components/backbone-route-filter/backbone-route-filter"















