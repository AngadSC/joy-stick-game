function drop_led () {
	
}
let joyZ = 0
let joyX = 0
let joyY = 0
game.setLife(10)
let catcher = game.createSprite(2, 4)
let ball = game.createSprite(2, 0)
game.setScore(0)
ball.set(LedSpriteProperty.Blink, 3)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        ball.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    ball.set(LedSpriteProperty.Y, 0)
    ball.set(LedSpriteProperty.X, randint(0, 4))
})
basic.forever(function () {
    joyY = pins.analogReadPin(AnalogPin.P2)
    joyX = pins.analogReadPin(AnalogPin.P0)
    joyZ = pins.analogReadPin(AnalogPin.P1)
    basic.pause(100)
    if (joyX < 400 && catcher.get(LedSpriteProperty.X) >= 1) {
        catcher.change(LedSpriteProperty.X, -1)
    } else if (joyX > 600 && catcher.get(LedSpriteProperty.X) <= 3) {
        catcher.change(LedSpriteProperty.X, 1)
    }
    if (joyY < 400 && catcher.get(LedSpriteProperty.Y) <= 3) {
        catcher.change(LedSpriteProperty.Y, 1)
    } else if (joyY > 600 && catcher.get(LedSpriteProperty.Y) >= 1) {
        catcher.change(LedSpriteProperty.Y, -1)
    }
    if (joyZ < 200) {
        game.setScore(0)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (ball.isTouching(catcher)) {
        game.addScore(1)
    } else if (ball.get(LedSpriteProperty.Y) == 4) {
        game.removeLife(0.1)
    }
})
