//NETTUNO
var neptuneDist = au*30.1;
var neptuneRadius = 2462;
var neptuneTexture = "textures/neptune/neptune.jpg"

var meshNeptune = new planet(neptuneRadius,neptuneTexture,neptuneDist);

//
var neptuneSelfSpeed = 1.09e-4;
var neptuneAroundSpeed = 1.20e-9;
var thetaNeptuneOrbit = THREE.Math.degToRad(90);
//

function neptuneAnimation(){
  meshNeptune.mesh.rotation.y += neptuneSelfSpeed;
  //variazione angolo terra
  thetaNeptuneOrbit -= neptuneAroundSpeed;
  meshNeptune.mesh.position.x = neptuneDist * Math.cos(thetaNeptuneOrbit);
  meshNeptune.mesh.position.z =  neptuneDist * Math.sin(thetaNeptuneOrbit);
}
