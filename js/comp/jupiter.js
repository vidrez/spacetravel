//GIOVE
var jupiterDist = au*5.20;
var jupiterRadius = 6911;
var jupiterTexture = "textures/jupiter/jupiter.jpg"

var meshJupiter = new planet(jupiterRadius,jupiterTexture,jupiterDist);

//
var jupiterSelfSpeed = 1.74e-4;
var jupiterAroundSpeed = 1.66e-8;
var thetaJupiterOrbit = THREE.Math.degToRad(90);
//

function jupiterAnimation(){
  meshJupiter.mesh.rotation.y += jupiterSelfSpeed;
  //variazione angolo terra
  thetaJupiterOrbit -= jupiterAroundSpeed;
  meshJupiter.mesh.position.x = jupiterDist * Math.cos(thetaJupiterOrbit);
  meshJupiter.mesh.position.z =  jupiterDist * Math.sin(thetaJupiterOrbit);
}
