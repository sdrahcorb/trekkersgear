import {
    audio,
    loader,
    state,
    device,
    game,
    video,
    utils,
    plugin,
    pool,
} from "melonjs";

import "index.css";

import TitleScreen from "js/stage/title.js";
import PlayScreen from "js/stage/play.js";
import EndTitleScreen from "js/stage/end-title.js";
import PlayerEntity from "js/renderables/player.js";

import DataManifest from "manifest.js";


device.onReady(() => {

    // initialize the display canvas once the device/browser is ready
    if (!video.init(1228, 1024, {parent : "screen", scale : "auto"})) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    // initialize the debug plugin in development mode.
    if (process.env.NODE_ENV === 'development') {
        import("@melonjs/debug-plugin").then((debugPlugin) => {
            // automatically register the debug panel
            utils.function.defer(plugin.register, this, debugPlugin.DebugPanelPlugin, "debugPanel");
        });
    }

    // Initialize the audio.
    audio.init("mp3,ogg");

    // allow cross-origin for image/texture loading
    loader.crossOrigin = "anonymous";

    // set and load all resources.
    loader.preload(DataManifest, function() {
        // set the user defined game stages
        state.set(state.MENU, new TitleScreen());
        state.set(state.PLAY, new PlayScreen());
        state.set(state.GAME_END, new EndTitleScreen());

        // add our player entity in the entity pool
        pool.register("mainPlayer", PlayerEntity);

        // Start the game.
        state.change(state.MENU);
        
        // Start playing
        // state.change(state.PLAY);
    });


    // loader.get(DataManifest, function() {
    //     state.change(state.PLAY);
    // });



});
