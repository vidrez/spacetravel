//URANO
//ATTENZIONE ALLA ROTAZIONE SU SE STESSO
var uranusDist = au*19.2;
var uranusRadius = 2536;
var uranusTexture = "textures/uranus/uranus.jpg"

var meshUranus = new planet(uranusRadius,uranusTexture,uranusDist);

//
var uranusSelfSpeed = 1.02e-4;
var uranusAroundSpeed = 2.37e-9;
var thetaUranusOrbit = THREE.Math.degToRad(90);
//

function uranusAnimation(){
  meshUranus.mesh.rotation.y += uranusSelfSpeed;
  //variazione angolo terra
  thetaUranusOrbit -= uranusAroundSpeed;
  meshUranus.mesh.position.x = uranusDist * Math.cos(thetaUranusOrbit);
  meshUranus.mesh.position.z =  uranusDist * Math.sin(thetaUranusOrbit);
}
