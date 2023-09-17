import {audio, Stage, game, ColorLayer, BitmapText, state} from "melonjs";


class EndTitleScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        // add a black background to the default Stage
        game.world.addChild(new ColorLayer("background", "#FFFFFF"));

        // add a font text display object
        game.world.addChild(new BitmapText(game.viewport.width / 2, game.viewport.height / 2,  {
            font : "PressStart2P",
            size : 4.0,
            textBaseline : "middle",
            textAlign : "center",
            text : "Game Over!"
        }));
    }
};

export default EndTitleScreen;



