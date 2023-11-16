const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

const threeCanvas = document.getElementById("three-canvas");

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add cube
const geometry = new THREE.BoxGeometry( 20, 20, 20);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// update cube vertices
for (var i = 0, l = geometry.vertices.length; i<l; i++) {
  geometry.vertices[i].x += -10 + Math.random()*20;
  geometry.vertices[i].y += -10 + Math.random()*20;
}

// rotate cube
cube.rotation.x = 0.45;
cube.rotation.y = -0.25;

camera.position.z = 100;

const light = new THREE.PointLight( 0xFFFF00 );
light.position.set( 10, 0, 25 );
scene.add( light );


const render = function () {
  requestAnimationFrame( render );
  cube.rotation.x += 0.05;
  renderer.render(scene, camera);
};

render();