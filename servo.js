var five = require('johnny-five'),
    Edison = require('edison-io'),
    board = new five.Board({
        io: new Edison()
    });

board.on('ready', function () {
    var led = five.Led(0),
        servo = five.Servo(0);
    
    led.blink();
    
    servo.cw(1);
    
    this.repl.inject({
        led: led,
        servo: servo
    });
});