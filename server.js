
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var views = require('./routes/views');
var snapchat = require('./routes/snapchat');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/views/indexView', views.indexView);
app.get('/views/aboutView', views.aboutView);
app.get('/views/pendingView', views.pendingView);
app.get('/views/renameView', views.renameView);


app.post('/api/login', snapchat.login);
app.post('/api/rename', snapchat.rename);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Server listening on port ' + app.get('port'));
});
