//MARTE
var marsDist = au*1.52;
var marsRadius = 338;
var marsTexture = "textures/mars/mars.jpg"

var meshMars = new planet(marsRadius,marsTexture,marsDist);

//
var marsSelfSpeed = 7.27e-5;
var marsAroundSpeed = 1.05e-7;
var thetaMarsOrbit = THREE.Math.degToRad(90);
//

function marsAnimation(){
  meshMars.mesh.rotation.y += marsSelfSpeed;
  //variazione angolo terra
  thetaMarsOrbit -= marsAroundSpeed;
  meshMars.mesh.position.x = marsDist * Math.cos(thetaMarsOrbit);
  meshMars.mesh.position.z =  marsDist * Math.sin(thetaMarsOrbit);
}
