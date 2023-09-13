import { Stage } from "melonjs";

class TitleScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        ; // TODO
        console.log('OnReset'); 
    }

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent() {
        ; // TODO 

    console.log('DestroyEventExecuted'); 
    }
};

export default TitleScreen;
