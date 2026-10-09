pins.P0.digitalWrite(false)
pins.P1.digitalWrite(false)
forever(function () {
    pins.P0.digitalWrite(true)
    pins.P1.digitalWrite(true)
})
