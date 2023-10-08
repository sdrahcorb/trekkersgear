// a melonJS data manifest
// note : this is note a webpack manifest
const DataManifest = [

    /* Bitmap Text */
    {
        name: "PressStart2P",
        type: "image",
        src:  "./data/fnt/PressStart2P.png"
    },
    {
        name: "PressStart2P",
        type: "binary",
        src: "./data/fnt/PressStart2P.fnt"
    }
];

const DataManifest2 = [
    // { name: "maze", type: "json",  src: "data/img/background/maze_background.json" },
    { 
        name: "maze", 
        type: "image", 
        src: "./data/img/background/maze_background.png" 
    },
    { 
        name: "maze", 
        type: "image", 
        src: "./data/img/background/maze_background_all" 
    },
];

export default DataManifest;
