import {UITextButton, TextureAtlas, loader, Stage, game} from "melonjs";

class PlayButton extends UITextButton {
    constructor(x,y) {          super(x,y, {
            font: 'PressStart2P',
            text: 'Play',
            // if you omit the next two, size is calculated by the size of the text
            borderWidth: 200,
            borderHeight: 20,
        });
    }

    onClick(){
        console.log('clicked play button');
        state.change(state.PLAY);
    }
};

// change(state: number, forceChange: boolean) → {}
// // change the game/app state

// // The onResetEvent method on the play screen will receive two args:
// // "level_1" and the number 3
// me.state.change(me.state.PLAY, "level_1", 3);

class PlayScreen extends Stage {

    onResetEvent() {
        // load the texture atlas file
        const atlas = new TextureAtlas(
            loader.getImage("Maze")
        );

        game.world.addChild(atlas, 0, 0);

        console.log("onReset");

    };
    /**
     *  action to perform on state change
     */
    // onResetEvent() {
    //     // add a gray background to the default Stage
    //     game.world.addChild(new ColorLayer("background", "#202020"));

    //     // add a font text display object
    //     game.world.addChild(new BitmapText(game.viewport.width / 2, game.viewport.height / 2,  {
    //         font : "PressStart2P",
    //         size : 4.0,
    //         textBaseline : "middle",
    //         textAlign : "center",
    //         text : "Hello World !"
    //     }));
    //     game.world.addChild(new PlayButton(0,0,)
    //     );
    // }
};

console.log(game);

   // viewport width and height
   const w = 20;
   const h = 20;

   // create background sprite
   const atlas = new TextureAtlas(
    loader.getImage("Maze")
    );

//    const background = atlas.createSpriteFromName("Maze");

   // set its position to the middle of the viewport
   atlas.pos.set(w/2, h/2);

   // add sprite to the scene
   game.world.addChild(atlas, 1);

export default PlayScreen;

