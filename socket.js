var server = require('http').createServer(),
    url = require('url'),
    WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ server: server }),
    express = require('express'),
    app = express(),
    port = 3000;

app.use(require("express").static('public'));

server.listen(port);

// Configure Socket Server
wss.on('connection', function(socket){
    console.log('user connected');

    socket.on('message', function (message) {
        console.log('user request ' + message);
    });
});