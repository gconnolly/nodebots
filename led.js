var five = require('johnny-five'),
    Edison = require('edison-io'),
    board = new five.Board({
        io: new Edison()
    });

board.on('ready', function () {
    var led = five.Led(0);
    
    led.blink();
    
    this.repl.inject({
        led: led
    });
});