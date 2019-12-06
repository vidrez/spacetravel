
 Anim();


function Anim() {

  var delta = clock.getDelta();
  stats.update();
  requestAnimationFrame(Anim);
  renderer.render(scene, camera);
  controls.movementSpeed = cameraSpeed;
  controls.update(delta);
  earthAnimation();
  borderControl();
  saturnAnimation();
  mercuryAnimation();
  venusAnimation();
  marsAnimation();
  jupiterAnimation();
  uranusAnimation();
  neptuneAnimation();
}

//Controllo resize finestra
function onWindowResize( event ) {
  SCREEN_HEIGHT = window.innerHeight;
  SCREEN_WIDTH  = window.innerWidth;
  renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
  camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
  wheel.width = SCREEN_WIDTH/4;
  wheel.height =SCREEN_WIDTH/4;
  camera.updateProjectionMatrix();
}

window.addEventListener( 'resize', onWindowResize, false );
