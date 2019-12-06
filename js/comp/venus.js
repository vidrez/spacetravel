//VENERE
//ATTENZIONE ALLA ROTAZIONE SU SE STESSO
var venusDist = au*0.722;
var venusRadius = 605;
var venusTexture = "textures/venus/venus.jpg"

var meshVenus = new planet(venusRadius,venusTexture,venusDist);

//
var venusSelfSpeed = 2.99e-7;
var venusAroundSpeed = 3.24e-7;
var thetaVenusOrbit = THREE.Math.degToRad(90);
//

function venusAnimation(){
  meshVenus.mesh.rotation.y -= venusSelfSpeed;
  //variazione angolo terra
  thetaVenusOrbit -= venusAroundSpeed;
  meshVenus.mesh.position.x = venusDist * Math.cos(thetaVenusOrbit);
  meshVenus.mesh.position.z =  venusDist * Math.sin(thetaVenusOrbit);
}
