/**
 * Module dependencies.
 */

var express = require('express'),
  fs = require('fs'),
  config = require('./config'),
  http = require('http');

var app = express();

// Configuration
app.configure(function()
{
  app.set('port', process.env.PORT || config.port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: config.secret }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function()
{
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function()
{
  app.use(express.errorHandler());
});

require('./boot')(app, config, fs);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
