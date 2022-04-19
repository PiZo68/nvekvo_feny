input.onButtonPressed(Button.A, function () {
    for (let sor = 0; sor <= 4; sor++) {
        for (let oszlop = 0; oszlop <= 4; oszlop++) {
            led.plotBrightness(oszlop, sor, 200 - oszlop * 30 + 1)
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let sor2 = 0; sor2 <= 4; sor2++) {
        for (let oszlop2 = 0; oszlop2 <= 4; oszlop2++) {
            led.plotBrightness(oszlop2, sor2, oszlop2 * 10 + 1)
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
