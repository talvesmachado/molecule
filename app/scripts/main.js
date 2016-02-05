document.addEventListener("DOMContentLoaded", function(event) {

  console.log("Hello BabylonJS");
  // Get the canvas element from our HTML above
  var canvas = document.querySelector("#render");

  // Load the BABYLON 3D engine
  var engine = new BABYLON.Engine(canvas, true);

	// This begins the creation of a function that we will 'call' just after it's built
  var createScene = function () {

    // Now create a basic Babylon Scene object
    var scene = new BABYLON.Scene(engine);

    // Change the scene background color to black.
    scene.clearColor = new BABYLON.Color3(0, 0, 0);

    // This creates and positions a free camera
//    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -50), scene);
  var camera = new BABYLON.ArcRotateCamera("camera1", 0,0, -50, new BABYLON.Vector3(5, 5, 0), scene);
    // This targets the camera to scene origin
//    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, false);

    // This creates a light, aiming 0,1,0 - to the sky.
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Dim the light a small amount
    light.intensity = .5;


    var lines = BABYLON.Mesh.CreateLines("lines", [
               new BABYLON.Vector3(0, 0, 0),
               new BABYLON.Vector3(10, 0, 0),
               new BABYLON.Vector3(10, 10, 0),
               new BABYLON.Vector3(0, 10, 0),
               new BABYLON.Vector3(0, 0, 0)
           ], scene);

    // Leave this function
    return scene;

  };  // End of createScene function

  var scene = createScene();

  engine.runRenderLoop(function () {
    scene.render();
  });

  window.addEventListener("resize", function () {
    engine.resize();
  });

});
