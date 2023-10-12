import {UITextButton, audio, Stage, game, ColorLayer, Color, BitmapText, state} from "melonjs";

// console.log(new Color().parseHex("#202020"));
// debugger;

class TitleButton extends UITextButton {
    constructor(x,y) {          
        super(x,y, {
            font: 'PressStart2P',
            text: 'Play now!',
            // if you omit the next two, size is calculated by the size of the text
            borderWidth: 280,
            borderHeight: 40,

        });
    }

    onClick(){
        console.log('clicked title button');
        state.change(state.PLAY);
    }

}


class TitleScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        // add a gray background to the default Stage
        game.world.addChild(new ColorLayer("background", "#202020"));

        console.log(game);

        // add a font text disTitle object
        // game.world.addChild(new BitmapText(game.viewport.width / 2, game.viewport.height / 2,  {
        game.world.addChild(new BitmapText(20, 20,  {
            font : "PressStart2P",
            size : 4.0,
            textBaseline : "middle",
            textAlign : "center",
            text : "Hello World !"
        }));
        game.world.addChild(new TitleButton(0,0));
    }
};

export default TitleScreen;






