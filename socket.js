var app = require('express')(),
    http = require('http'),
    httpServer = http.createServer(app),
    WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ server: httpServer }),
    httpPort = 3000;

app.use(require("express").static('public'));

httpServer.listen(httpPort);

// Configure Socket Server
wss.on('connection', function(socket){
    console.log('user connected');

    socket.on('message', function (message) {
        console.log('user request ' + message);
    });
});