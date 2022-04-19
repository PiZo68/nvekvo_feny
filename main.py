def on_button_pressed_a():
    for sor in range(5):
        for oszlop in range(5):
            led.plot_brightness(oszlop, sor, 200 - oszlop * 30 + 1)
            basic.pause(100)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for sor2 in range(5):
        for oszlop2 in range(5):
            led.plot_brightness(oszlop2, sor2, oszlop2 * 10 + 1)
            basic.pause(100)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
