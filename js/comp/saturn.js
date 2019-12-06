//SATURNO
var ring;
var saturnDist = au*9.58;
var saturnRadius = 5823;
var saturnTexture = "textures/saturn/saturn.jpg"

var meshSaturn = new planet(saturnRadius,saturnTexture,saturnDist);

//
var saturnSelfSpeed = 1.74e-4;
var saturnAroundSpeed = 6.87e-9;
var thetaSaturnOrbit = THREE.Math.degToRad(90);
//

function saturnAnimation(){
  meshSaturn.mesh.rotation.y += saturnSelfSpeed;
  //variazione angolo terra
  thetaSaturnOrbit -= saturnAroundSpeed;
  meshSaturn.mesh.position.x = saturnDist * Math.cos(thetaSaturnOrbit);
  meshSaturn.mesh.position.z =  saturnDist * Math.sin(thetaSaturnOrbit);
}

function saturnOrbit(){
var material = new THREE.LineBasicMaterial({color: 'red'});
var geometry = new THREE.CircleGeometry(saturnDist,1000);
geometry.vertices.shift();
var Saturnorbit = new THREE.Line(geometry, material);
Saturnorbit.position.set(0,0,0);
Saturnorbit.rotation.x = THREE.Math.degToRad(90);
scene.add(Saturnorbit);
}

function saturnRing(){
  THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
  new THREE.MTLLoader()
    .setPath( '3DModels/Ring_Model/' )
    .load( 'untitled.mtl', function ( materials ) {
      materials.preload();
      new THREE.OBJLoader()
        .setMaterials( materials )
        .setPath( '3DModels/Ring_Model/' )
        .load( 'untitled.obj', function ( object ) {
          window.ring = object;
          meshSaturn.mesh.add( ring );
          ring.position.set(0,0,0);
          ring.scale.set(300,300,300);
          ring.rotation.x = -0.261799;
        });
    } );
}
