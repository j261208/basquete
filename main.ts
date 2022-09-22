let p2 = 0
let p1 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("PREPARE-SE")
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(1000, 7000))
    basic.showLeds(`
        . # # # .
        # # # . #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.pause(500)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        . . . # #
        . . . # #
        `)
    basic.clearScreen()
    p2 += 1
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # . . .
        # # . . .
        `)
    basic.clearScreen()
    p1 += 1
})
basic.forever(function () {
	
})
