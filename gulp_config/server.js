var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var serve = require('serve-static');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var root = path.resolve('./public');
var express = require('express');
var map = require('../map.json');


module.exports = {
  open: function() {
    var options = {
      url: "http://localhost:3000",
      app: "google chrome"
    };
    gulp.src("./public/index.html").pipe($.open("", options));
  },
  serve: function() {
    var app = express();
    var http = require('http').Server(app);
    var io = require('socket.io')(http);

    app.use(serve(root));
    app.use(bodyParser.json());
    app.use(morgan('dev'));

    app.get('/', function(req, res){
      res.sendfile('index.html');
    });

    io.on('connection', function(socket){
      console.log('user connected');
      io.emit('load-btns', Object.keys(map));

      socket.on('gulp-task', function(msg){
        //gulp.start(msg);
        console.log(msg);
      });

      socket.on('chat-msg', function(msg){
        console.log(msg);
      });

      socket.on('disconnect', function(){
        io.emit('chat message', 'user disconnected');
        console.log('user disconnected');
      });
    });

    http.listen(3000, function(){
      console.log('listening on localhost:3000');
    });
  }
};


