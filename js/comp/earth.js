//Branch earth
var moonRadius = 173;
var radius = 637;
var cloudsScale = 1.01;
var rotationSpeed = 7.27e-5;
var moonRotation = 2.61e-6;
var textureMoon = "textures/earth/moon_1024.jpg";
var textureEarth = "textures/earth/Terra_s.jpg";
var textureClouds = "textures/earth/Clouds_s.png";
var earthDist = au;
var Moon_Earth = 3844 + radius;
var moonDist = Moon_Earth;
var EarthOrbitRot = 1.99e-7;
//Raggio orbita,angolo di partenza, velocità di rotazione(radianti) -- MOON ROTATION
var r = Moon_Earth;
var theta = THREE.Math.degToRad(90);
var dTheta = moonRotation;
//Raggio orbita,angolo di partenza, velocità di rotazione(radianti) -- EARTH ROTATION
var thetaEarthOrbit = THREE.Math.degToRad(90);
var dThetaEarthOrbit = EarthOrbitRot;


//Terra
var meshEarth = new planet(radius,textureEarth,earthDist);
meshEarth.mesh.rotation.y = 0;

//Nuvole
var cloudsEarth = new planet(radiuss,textureClouds,0); //z sfasata di 15 altrimenti da problemi si sivrapposizione e si vede uno sfarfallio delle texture
cloudsEarth.mesh.scale.set( cloudsScale, cloudsScale, cloudsScale );
cloudsEarth.material.transparent = true;
//Moon
var moonEarth = new planet(moonRadius,textureMoon,moonDist);


//Orbita(Disegno indicativo)

function moonOrbit(){
var material = new THREE.LineBasicMaterial({color: 'aqua'});
var geometry = new THREE.CircleGeometry(Moon_Earth,1000);
geometry.vertices.shift();
var orbit = new THREE.Line(geometry, material);
orbit.position.set(0,0,earthDist);
//orbit.rotation.x = 1.65806; //rotazione 95°
orbit.rotation.x = THREE.Math.degToRad(90);
scene.add(orbit);
}

function earthOrbit(){
var material = new THREE.LineBasicMaterial({color: 'blue'});
var geometry = new THREE.CircleGeometry(earthDist,1000);
geometry.vertices.shift();
var Earthorbit = new THREE.Line(geometry, material);
Earthorbit.position.set(0,0,0);
Earthorbit.rotation.x = THREE.Math.degToRad(90);
scene.add(Earthorbit);
}



function earthAnimation(){
  meshEarth.mesh.rotation.y += rotationSpeed;
  cloudsEarth.mesh.rotation.y += rotationSpeed*2;
  moonEarth.mesh.rotation.y -= moonRotation;
  //variazione angolo luna
  theta -= dTheta;
  moonEarth.mesh.position.x = r * Math.cos(theta);
  moonEarth.mesh.position.z = r * Math.sin(theta);
  //variazione angolo terra
  thetaEarthOrbit -= dThetaEarthOrbit;
  meshEarth.mesh.position.x = earthDist * Math.cos(thetaEarthOrbit);
  meshEarth.mesh.position.z =  earthDist * Math.sin(thetaEarthOrbit);
}

var earthSystem = [meshEarth.mesh,moonEarth.mesh,cloudsEarth.mesh];

document.addEventListener("keypress",function(e){
  switch (e.charCode) {
    case 103://G
    window.dTheta = 0.01;
    window.moonRotation = 0.01;
    window.dThetaEarthOrbit = 0.001;
    window.EarthOrbitRot = 0.001;
      break;
  }
});
