
var app = require('../app');
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);


function socketio(){

    server.listen(app.get('port'), function() {
        console.log('listening!!!');
    });

    //socket処理を記載する
    io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
      });
    });

};

//export
module.exports = socketio;
