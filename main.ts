basic.forever(function () {
    if (input.lightLevel() <= 45) {
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) <= 250) {
    	
    } else {
    	
    }
})
