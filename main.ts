input.onButtonPressed(Button.A, function () {
    assemble = LineClear
    basic.showLeds(`
        . # . . #
        . . # # .
        . . # . #
        # # . . .
        . . # . .
        `)
    bahaya = 2
})
input.onButtonPressed(Button.B, function () {
    assemble = bahaya
    basic.showIcon(IconNames.Ghost)
})
let bahaya = 0
let LineClear = 0
let assemble = 0
radio.setGroup(1)
assemble = 0
LineClear = 1
basic.forever(function () {
    radio.sendString("" + (assemble))
})
