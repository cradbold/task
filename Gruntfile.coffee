module.exports = (grunt) ->

  TIMEOUT = 100000

  require("time-grunt") grunt
  require("matchdep").filterDev("grunt-*").forEach grunt.loadNpmTasks
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    concurrent:
      admin: ["express:admin"]


    clean:
      dist:
        files: [
          dot: true
          src: ["admin/public/app", "admin/public/all.js"]
        ]

    requirejs:
      compile:
        options:
          name: "main"
          optimize: "none"
          baseUrl: "admin/public/app"
          mainConfigFile: "admin/public/app/config.js"
          out: "admin/public/all.js"

    express:
      options:
        showStack: true

      admin:
        options:
          server: "admin/server.coffee"
          port: 3002
          hostname: 'admin'

    jade_handlebars:
      options:
        namespace: "JST"
        amd: true

      compile:
        files:
          "admin/public/app/templates.js": ["admin/public/templates/**/*.jade"]

    coffee:
      glob_to_multiple:
        expand: true
        flatten: false
        cwd: "admin/public/src"
        src: ["**/*.coffee"]
        dest: "admin/public/app"
        ext: ".js"

    watch:
      options:
        livereload: true

      coffee:
        files: ["**/*.coffee"]
        tasks: ["coffee-compile"]

      jade_handlebars:
        files: ["admin/public/templates/**/*.jade"]
        tasks: ["custom-requirejs"]

      "admin-app":
        files: ["admin/public/src/**/*.coffee"]
        tasks: ["custom-requirejs"]

      admin:
        files: ["admin/**/*.coffee"]
        tasks: ["express:admin"]

      all:
        files: ["config/**/*.coffee", "lib/**/*.coffee", "middleware/**/*.coffee"]
        tasks: ["express"]


  grunt.loadNpmTasks("herunt")

  grunt.registerTask "custom-requirejs", ["jade_handlebars", "requirejs"]
  grunt.registerTask "coffee-compile", ["coffee"]

  grunt.registerTask "production", []
  grunt.registerTask "compile", ["clean", "jade_handlebars", "coffee", "requirejs"]
  grunt.registerTask "server", ["compile", "express", "watch"]
