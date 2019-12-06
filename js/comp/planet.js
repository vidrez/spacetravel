function planet(radius,texture,distance){
  var textureLoader = new THREE.TextureLoader();
  this.geometry = new THREE.SphereBufferGeometry( radius, 100, 50 );
  this.material = new THREE.MeshLambertMaterial( {
    map: textureLoader.load( texture )});
  this.mesh = new THREE.Mesh( this.geometry, this.material );
  this.mesh.position.z = distance;
}
