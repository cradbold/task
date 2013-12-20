express = require("express")
http = require("http")
path = require("path")
exec = require("child_process").exec
fs = require("fs")
crypto = require('crypto')
uuid = require("node-uuid")
parse = require("url").parse
routes = require("./routes")
request = require("request")

app = express()



app.set "views", __dirname + "/views"
app.set "view engine", "jade"
app.set "env", (process.env.NODE_ENV or "development")
app.use express.favicon()
app.use express.logger("dev")
app.use express.bodyParser()
app.use express.methodOverride()
app.use express.cookieParser()

app.use "/crud", require("backbone-mongoose-crud").express
app.use app.router
app.use express.static(path.join(__dirname, "public"))
app.configure "development", ->
  app.use express.errorHandler()



app.configure "development", ->
  app.use express.errorHandler(
    dumpExceptions: true
    showStack: true
  )

app.configure "production", ->
  app.use express.errorHandler()

#
#key_path = path.resolve(__dirname, '..', 'secure/key.pem')
#cert_path = path.resolve(__dirname, '..', 'secure/cert.pem')

#options =
#  key: fs.readFileSync key_path
#  cert: fs.readFileSync cert_path

#privateKey = fs.readFileSync('privatekey.pem').toString();
#certificate = fs.readFileSync('certificate.pem').toString();

#credentials = crypto.createCredentials({key: https_opt.key, cert: https_opt.cert});

#  https support:
#port = process.env.PORT or config.api.PORT
#if process.env.NODE_ENV is 'production'
#  https_opt =
#    key: fs.readFileSync('/home/work/valiant_coffee/certificate/key.pem'),
#    cert: fs.readFileSync('/home/work/valiant_coffee/certificate/certificate/valiant-cert.pem')
#  https.createServer(https_opt, app).listen port, () ->
#    console.log 'Express server listening on port ' + port
#else
#  http.createServer(app).listen port, ->
#    console.log "Express server listening on port " + port

port = process.env.PORT or 3000

http.createServer(app)


#http.createServer(options, app).listen port, ->
#  console.log "Express server listening on port " + port

# ROUTES

# Index
app.get "/", routes.home.index

# Session

db = require("../lib/db")


url = require('url')

app.post "/saveChange",(req,res) ->
  arr = []
  mas = req.body.mas
  user = req.body.user
  if mas then arr = mas[user._id]
  acl.setAccess user, arr, (err, access)->
    res.send(200)


module.exports = app


# HTTPS 

#var https_opt = {
#    key: fs.readFileSync('/home/dunice/work/valiant/key.pem'),
#    cert: fs.readFileSync('/home/dunice/work/valiant/cert.pem')
#};
#https.createServer(https_opt, app).listen(app.get('port'), function () {
#    //console.log('config.httpsOptions', config.httpsOptions);
#    console.log('Express server listening on port ' + app.get('port'));
#});




