var server = require('http').createServer(),
    url = require('url'),
    WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ server: server }),
    express = require('express'),
    app = express(),
    port = 3000,
    five = require('johnny-five'),
    Edison = require('edison-io'),
    board = new five.Board({
        io: new Edison()
    });

app.use(require("express").static('public'));

server.listen(port);

board.on('ready', function () {
    var led = five.Led(0),
        servo = five.Servo(0);

    this.repl.inject({
        led: led,
        servo: servo
    });
    
    // Configure Socket Server
    wss.on('connection', function(socket){
        console.log('user connected');

        socket.on('message', function (message) {
            console.log('user request ' + message);
            if('on') {
                led.blink();
                servo.cw(1);
            } else {
                led.off();
                servo.stop();
            }
        });
    });
});