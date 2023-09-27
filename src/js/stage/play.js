import {UITextButton, audio, Stage, game, ColorLayer, BitmapText, state} from "melonjs";

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
        state.change(state.GAME_END);
    }
}

class PlayScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        // add a gray background to the default Stage
        game.world.addChild(new ColorLayer("background", "#202020"));

        // add a font text display object
        game.world.addChild(new BitmapText(game.viewport.width / 2, game.viewport.height / 2,  {
            font : "PressStart2P",
            size : 4.0,
            textBaseline : "middle",
            textAlign : "center",
            text : "Hello World !"
        }));
        game.world.addChild(new PlayButton(0,0,)
        );
    }
};

export default PlayScreen;

