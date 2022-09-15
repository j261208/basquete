input.onPinPressed(TouchPin.P0, function () {
    basic.showString("prepare-se")
    basic.pause(500)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(1000, 7000))
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
})
basic.forever(function () {
	
})
