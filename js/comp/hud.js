//posizione
var position = document.getElementById('coord_val');

var coord_x = camera.position.x;
var coord_y = camera.position.y;
var coord_z = camera.position.z;
//Velocità

var speed_val = document.getElementById('speed_val');

speed_val.innerHTML = cameraSpeed+" m/s";

//
var wheel = document.getElementById('wheel');

wheel.width = SCREEN_WIDTH/4;
wheel.height =SCREEN_WIDTH/4;

wheel.style.display = "block";

var steering = false;

var direction = null;

var steer = "engaged";
wheel_anim();

//Listener eventi
document.addEventListener("keydown",function(e){
  if (e.keyCode == 39 || e.keyCode == 37) {
    window.steering = true;
    window.steer = "engaged";
    switch (e.keyCode) {
      case 39:
      window.direction = "right";
      break;
      case 37:
      window.direction = "left";
      break;
    }
  }
});

document.addEventListener("keyup",function(e){
  if ((e.keyCode == 39 && window.steering == true) || (e.keyCode == 37 && window.steering == true)) {
    window.steering = false;
    window.steer = "released";
  }
});
//
var deg = 0;

function wheel_anim(){
  requestAnimationFrame(wheel_anim);

    //KeyDown
    if (window.direction == "right" && window.steering == true && window.steer == "engaged" && window.deg < 90) {
      window.deg += 5;
    } else if(window.direction == "left" && window.steering == true && window.steer == "engaged" && window.deg > -90){
      window.deg -= 5;
    }

    //KeyUp
    if (window.direction == "right" && window.steer == "released" && window.deg != 0 && window.steering == false) {
      window.deg -= 5;
      console.log(window.deg);
    } else if(window.direction == "left" && window.steer == "released" && window.deg != 0 && window.steering == false) {
      window.deg += 5;
      console.log(window.deg);
    }

    //Steering animation
    if (window.deg < 90 && window.deg > -90) {
      wheel.style.transform = "rotate("+deg+"deg)";
    }

//Posizione
coord_x = camera.position.x;
coord_y = camera.position.y;
coord_z = camera.position.z;
position.innerHTML = coord_x.toFixed(0) + " " + coord_y.toFixed(0) + " " + coord_z.toFixed(0);

}
