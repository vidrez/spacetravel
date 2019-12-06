//MERCURIO
var mercuryDist = au*0.387;
var mercuryRadius = 243;
var mercuryTexture = "textures/mercury/mercury.jpg"

var meshMercury = new planet(mercuryRadius,mercuryTexture,mercuryDist);

//
var mercurySelfSpeed = 1.27e-6;
var mercuryAroundSpeed = 8.26e-7;
var thetaMercuryOrbit = THREE.Math.degToRad(90);
//

function mercuryAnimation(){
  meshMercury.mesh.rotation.y += mercurySelfSpeed;
  //variazione angolo terra
  thetaMercuryOrbit -= mercuryAroundSpeed;
  meshMercury.mesh.position.x = mercuryDist * Math.cos(thetaMercuryOrbit);
  meshMercury.mesh.position.z =  mercuryDist * Math.sin(thetaMercuryOrbit);
}
