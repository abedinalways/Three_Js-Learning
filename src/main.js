import './style.css'
import * as THREE from 'three'

// THREE.Scene()
// THREE.Camera()
// THREE.Mesh()

const scene = new THREE.Scene();
//console.log(scene);
// const camera = new THREE.Camera();
// console.log(camera);
// const mesh = new THREE.Mesh();
// console.log(mesh);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
//console.log(camera);
// const view = camera.position.z = 6;
// console.log(view)
//console.log(camera.position) // x:0 , y:0 , z:0
//fov= field of view=75      window.innerWidth / window.innerHeight=Aspect Ratio(Browser-এর Screen-এর অনুপাত)
//0.1= Near Plane (মানে Camera থেকে 0.1 unit-এর কম কাছে কিছু থাকলে সেটা দেখা যাবে না।)
//1000= Far Plane (মানে Camera থেকে 1000 unit-এর বেশি দূরে কিছু থাকলে সেটাও দেখা যাবে না।)
//const newCamera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
//newCamera.position.z = 10;
//console.log(newCamera);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight)
// এখানে WebGLRenderer হলো এমন একটা Renderer, যেটা GPU ব্যবহার করে 3D Scene আঁকে।
console.log(renderer);
//Renderer = Painter 
// Scene-এ যা আছে, Camera যা দেখছে—Renderer সেটা Browser-এ আঁকে।
document.body.appendChild(renderer.domElement);  //browser a canvas add kora
// renderer.render(scene, camera) 
//Renderer, Camera দিয়ে Scene-টা দেখো এবং Canvas-এ এঁকে দাও

// Geometry = Shape  // mane shape kemon hobe  cube? sphere? cylinder?
//Material= color/paint  // mane dekhte kemon red? blue? metal? glass?
// Mesh = shape+ material
//example :
//  Geometry = কাঠ

//Material = রং

//Mesh = তৈরি টেবিল


//build a Geometry :: BoxGeometry(width, height, depth)

const geometry = new THREE.BoxGeometry(4, 1, 1);

// coloring the box
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const cube = new THREE.Mesh(geometry, material);
cube.position.x = 2
scene.add(cube);
renderer.render(scene, camera)

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.05;
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
