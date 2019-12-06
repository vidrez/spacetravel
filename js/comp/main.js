//Controlla se è presente webgl
if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

//Grandezza schermata gioco
var MARGIN = 0;
var SCREEN_HEIGHT = window.innerHeight - MARGIN * 2;
var SCREEN_WIDTH  = window.innerWidth;
//
stats = new Stats();
document.body.appendChild( stats.dom );


var scene = new THREE.Scene();



//Renderer
renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
var RenderDiv = document.getElementById('renderer');
RenderDiv.appendChild( renderer.domElement );
//

//Elementi aggiunti alla scena
//Luci,Terra,Nuvole (TERRA)
scene.add( meshEarth.mesh );
meshEarth.mesh.add( moonEarth.mesh );
meshEarth.mesh.add(cloudsEarth.mesh);
scene.add( meshJupiter.mesh );
scene.add( meshMars.mesh );
scene.add( meshMercury.mesh );
scene.add( meshNeptune.mesh );
scene.add( meshSaturn.mesh );
scene.add( meshUranus.mesh );
scene.add( meshVenus.mesh );
scene.add(Sunmesh);


var camera = new THREE.PerspectiveCamera(40, SCREEN_WIDTH/SCREEN_HEIGHT, 1, 1e8);
var cameraSpeed = 10000;
scene.add(camera);
camera.position.set(meshEarth.mesh.position.x,meshEarth.mesh.position.y,meshEarth.mesh.position.z-radius);
camera.lookAt(meshEarth.mesh.position); //posizione iniziale camera
//
var controls = new THREE.FlyControls( camera );
var clock = new THREE.Clock();
controls.domElement = renderer.domElement;
controls.rollSpeed = Math.PI / 20;
controls.autoForward = false;
controls.dragToLook = true;
//

 //var alight = new THREE.AmbientLight();scene.add(alight);
 //Luce direzionale
 var E_Light = new THREE.PointLight(0xffffff,1,limit*1.5);
 E_Light.position.set(0,0,0);
 scene.add(E_Light);


 //earthOrbit();
 //moonOrbit();
 //saturnOrbit();
 star();
 saturnRing();
