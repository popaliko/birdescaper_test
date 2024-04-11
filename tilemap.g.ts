// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level2":
            case "Level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Level1":
            case "Level1":return tiles.createTilemap(hex`3c00080004050600000000000004050600000000000000000405060000000000000000000000000405060000000000000000000000040506000000000000000007080900040506000007080900000000000000000708090000000000000000000000120708090000000000000000000012070809000000000012040500000012070809000000000000001204050600000000000000001200040506000000000000000000000004050600000000000000000000000000070800000000000000000000000000000007080900001200000405060000070809120000000000000000001207080912000000000000000004050600000000000000000000000000001200000000000000000000000708090000000000000000120000000000000000000000000000000000001207080900000000000000000000000000000b0d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001200000000120b0f0c0c0d0000000000000012000000000012000000000000120000120000000000120000000000001200000000000000120002030a03030b0b0b0b0c0c0c0c0c0e101010101010110303030303030301131313131313131313131313131313131313131313131313131313131313`, img`
222222222222222222222222222222222222222222222222222222222222
............................................................
............................................................
............................................................
............................................................
...........22...............................................
.........22222..............................................
222222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.builtin.forestTiles3,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile14,myTiles.tile2,myTiles.tile3,sprites.builtin.forestTiles23,sprites.builtin.forestTiles24,sprites.swamp.swampTile16,sprites.builtin.forestTiles26,sprites.builtin.forestTiles29,sprites.builtin.forestTiles25,sprites.swamp.swampTile0,sprites.builtin.forestTiles21,sprites.dungeon.collectibleBlueCrystal,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "1R":
            case "tile12":return tile12;
            case "myTile":
            case "tile1":return tile1;
            case "2L":
            case "tile14":return tile14;
            case "2M":
            case "tile2":return tile2;
            case "2R":
            case "tile3":return tile3;
            case "1L":
            case "tile10":return tile10;
            case "1M":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
