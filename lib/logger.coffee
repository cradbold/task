winston = require("winston")

winston.loggers.add "log",
  console:
    level: "info"
    colorize: "true"


winston.loggers.add "api",
  console:
    level: "info"
    colorize: "true"
    label: "API"


winston.loggers.add "email",
  console:
    level: "info"
    colorize: "true"
    label: "EMAIL"



log = winston.loggers.get("log")
api = winston.loggers.get("api")
email = winston.loggers.get("email")
module.exports =
  api: api
  log: log
  email: email
