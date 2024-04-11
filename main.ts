scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles24, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles25, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Luxi, 200, 0)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile16, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles26, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles29, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let Vogel: Sprite = null
let projectile: Sprite = null
let Luxi: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`Level1`)
Luxi = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    8 . . . . . 8 6 6 6 8 8 . . . . 
    8 . . . . 8 6 6 6 6 6 6 8 . . . 
    8 8 . . . 8 6 9 6 9 6 9 9 8 . . 
    8 8 8 8 8 8 6 6 6 6 6 6 6 6 8 8 
    8 6 6 6 2 2 2 2 6 6 6 6 6 6 6 8 
    8 6 6 1 1 1 1 6 6 6 8 6 6 6 6 8 
    8 6 6 6 6 6 6 6 6 8 6 6 8 6 8 . 
    8 8 8 6 6 6 6 6 8 6 6 8 6 8 . . 
    . . . 8 8 8 8 8 6 6 6 8 8 . . . 
    . . . . . . 8 6 6 6 8 . . . . . 
    . . . . . . 8 6 6 8 . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Luxi, 125, 125)
Luxi.setStayInScreen(true)
tiles.placeOnTile(Luxi, tiles.getTileLocation(0, 3))
info.startCountdown(15)
game.onUpdate(function () {
    scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + 2, 0)
})
forever(function () {
    Vogel = sprites.createProjectileFromSide(img`
        . . . . c c c . . . . . . c c . 
        . . . c d d d c . . . . c d c . 
        . . c d d d d d c . . . c d c . 
        . c d d d d d d d c . c d d c . 
        . c d f d d d d d d c d d d d c 
        5 5 d d d d d d d c d d d d d c 
        . c d d d d d d d d d d d d d c 
        . . c c d d d d d d d d d d c . 
        . . . c d d d d d d d d d c . . 
        . . . c d d d d d d d d c . . . 
        . . . c d d d d d d d d c . . . 
        . . . . c d d d d d d c c c c c 
        . . . . . c d d d d d c 4 . . . 
        . . . . . . c c c c c . . 4 . 4 
        . . . . . . . . . . . . . . 4 . 
        . . . . . . . . . . . . . . . 4 
        `, -50, 0)
    Vogel.y = randint(10, 115)
    Vogel.setKind(SpriteKind.Enemy)
    pause(randint(1000, 2500))
})
