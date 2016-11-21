/*
*---- CANVAS INIT ----
*/

//Create the renderer
var renderer = PIXI.autoDetectRenderer(
  256, 256,
  {antialias: false, transparent: false, resolution: 1}
);

// Some styling on the renderer
renderer.view.style.border = "1px dashed black";
renderer.backgroundColor = 0x061639;
renderer.autoResize = true;
renderer.resize(512, 512);
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);

// Keep canvas on full window size when resizing
window.onresize = function (event){
  var w = window.innerWidth;
  var h = window.innerHeight;
  //this part resizes the canvas but keeps ratio the same
  renderer.view.style.width = w + "px";
  renderer.view.style.height = h + "px";
  //this part adjusts the ratio:
  renderer.resize(w,h);
}

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);

/*
*---- TEXTURES ----
*/
PIXI.loader
// .add("catImage", "imgs/required/assets/maggot.png")
  .add([
    "imgs/required/assets/maggot.png",
    "imgs/required/assets/displace.png"
  ])
  .on("progress", loadProgressHandler)
  .load(setup);

// Display Loading Progress bar on loading
function loadProgressHandler(loader, resource) {

  //Display the file `url` currently being loaded
  console.log("loading: " + resource.url);

  //Display the precentage of files currently loaded
  console.log("progress: " + loader.progress + "%");

  //If you gave your files names as the first argument
  //of the `add` method, you can access them like this
  //console.log("loading: " + resource.name);
}

function setup() {
  console.log("setup");
  // Creating Sprite objects
  var cat = new PIXI.Sprite(
    // PIXI.loader.resources.catImage.texture
    PIXI.loader.resources["imgs/required/assets/maggot.png"].texture
  );
  var daniel = new PIXI.Sprite(
    // PIXI.loader.resources.catImage.texture
    PIXI.loader.resources["imgs/required/assets/displace.png"].texture
  );

  // Settings on Sprites

    // Position
      // daniel.x = 96;
      // daniel.y = 96;
        daniel.position.set(96, 0);

    // Size
      // daniel.scale.set(0.5, 0.5);

    // Rotation
      // daniel.pivot.set(32, 32);
      // daniel.rotation = 0.5;
      // daniel.anchor.set(0.5, 0.5);
      // daniel.anchor.set(0, 0);

  // Add Sprites to the canvas's stage.
  stage.addChild(cat);
  stage.addChild(daniel);

  renderer.render(stage);
}
