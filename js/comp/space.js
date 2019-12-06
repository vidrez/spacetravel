//Dimensioni scena
var au = 1495978;
var limit = au*31;
//Stelle
function star(){


  var starsGeometry = [new THREE.Geometry(),new THREE.Geometry()];
  var starRadius = limit*2;

for (var n = 0; n < 2; n++) {
  if (n == 0) {
    for ( var i = 0; i < 30000; i ++ ) {

    	var star = new THREE.Vector3();
      star.x = (Math.random()*(-starRadius*3)) + (starRadius);
      star.y = (Math.random()*(-starRadius*3)) + (starRadius);
      star.z = (Math.random()*(-starRadius*3)) + (starRadius);

    	starsGeometry[0].vertices.push( star );

    }
  } else {
    for ( var i = 0; i < 30000; i ++ ) {

    	var star = new THREE.Vector3();
      star.x = (Math.random()*(starRadius*3)) - (starRadius);
      star.y = (Math.random()*(starRadius*3)) - (starRadius);
      star.z = (Math.random()*(starRadius*3)) - (starRadius);

    	starsGeometry[1].vertices.push( star );

    }
  }

}

var starsMaterial = [];
starsMaterial[0] = new THREE.PointsMaterial( {size:0.8, color: 0x888888, sizeAttenuation: false } );
starsMaterial[1] = new THREE.PointsMaterial( {size:1.2, color: 0x888888, sizeAttenuation: false } );
var starField = [];
starField[0] = new THREE.Points( starsGeometry[0], starsMaterial[0] );
starField[1] = new THREE.Points( starsGeometry[1], starsMaterial[0] );

scene.add( starField[0] );
scene.add( starField[1] );


}


//Controllo bordi
function borderControl(){
  if (camera.position.z > limit) {
    camera.position.z = limit;
    console.log("bordo davanti");
  }
  if (camera.position.z < -limit) {
    camera.position.z = -limit;
    console.log("bordo dietro");
  }
  if (camera.position.x > limit) {
    camera.position.x = limit;
    console.log("bordo sinistra");
  }
  if (camera.position.x < -limit) {
    camera.position.x = -limit;
    console.log("bordo destra");
  }
  if (camera.position.y > limit) {
    camera.position.y = limit;
    console.log("bordo su");
  }
  if (camera.position.y < -limit) {
    camera.position.y = -limit;
    console.log("bordo giù");
  }
}
