import * as THREE from 'three';

import TWEEN from 'three/addons/libs/tween.module.js';
import {
  TrackballControls
} from 'three/addons/controls/TrackballControls.js';
import {
  CSS3DRenderer,
  CSS3DObject
} from 'three/addons/renderers/CSS3DRenderer.js';

const table = [
  'Asep', '22', 'M', 1, 1,
  'Dede', '37', 'M', 18, 1,
  'Fakih', '23', 'M', 1, 2,
  'Syukron', '20', 'M', 2, 2,
  'Muh', '22', 'M', 13, 2,
  'Kikok', '20', 'M', 14, 2,
  'Zakaria', '19', 'M', 15, 2,
  'Ramadhan', '24', 'M', 16, 2,
  'Irene', '20', 'F', 17, 2,
  'AL', '28', 'M', 18, 2,
  'Gus', '21', 'M', 1, 3,
  'Rosyid', '31', 'M', 2, 3,
  'Rifai', '28', 'M', 13, 3,
  'Muhammad', '23', 'M', 14, 3,
  'Riyan', '20', 'M', 15, 3,
  'Dim', '29', 'M', 16, 3,
  'Muhammad', '27', 'M', 17, 3,
  'Itsnain', '23', 'F', 18, 3,
  'Arif', '15', 'M', 1, 4,
  'Nafi', '21', 'F', 2, 4,
  'Cak', '25', 'M', 3, 4,
  'Sri', '22', 'F', 4, 4,
  'Nurohman', '42', 'M', 5, 4,
  'Mutima', '36', 'F', 6, 4,
  'Mahdi', '23', 'M', 7, 4,
  'Ramadhan', '23', 'M', 8, 4,
  'Ochaa', '25', 'F', 9, 4,
  'Gus', '35', 'M', 10, 4,
  'Adnan', '36', 'M', 11, 4,
  'DahLia', '22', 'F', 12, 4,
  'Hamzah', '40', 'M', 13, 4,
  'Ahmad', '24', 'M', 14, 4,
  'Rifay', '23', 'M', 15, 4,
  'Rifay', '23', 'M', 16, 4,
  'Eva', '22', 'F', 17, 4,
  'Muhammad', '23', 'M', 18, 4,
  'Sulaeman', '25', 'M', 1, 5,
  'Siti', '22', 'F', 2, 5,
  'Dessy', '23', 'F', 3, 5,
  'El', '23', 'M', 4, 5,
  'Diky', '23', 'M', 5, 5,
  'Amul', '25', 'F', 6, 5,
  'Med', '23', 'M', 7, 5,
  'Afhry', '29', 'M', 8, 5,
  'AR', '28', 'M', 9, 5,
  'AR', '30', 'M', 10, 5,
  'Tutik', '25', 'F', 11, 5,
  'Ariiss', '22', 'M', 12, 5,
  'Muhammad', '25', 'M', 13, 5,
  'M', '24', 'M', 14, 5,
  'Fitri', '25', 'F', 15, 5,
  'Rudy', '25', 'M', 16, 5,
  'Rvel', '19', 'M', 17, 5,
  'Agung', '24', 'M', 18, 5,
  'Muhammad', '25', 'M', 1, 6,
  'Anggun', '12', 'F', 2, 6,
  'Saeful', '21', 'M', 4, 9,
  'Rayen', '26', 'M', 5, 9,
  'Hana', '21', 'F', 6, 9,
  'Ahkmad', '28', 'M', 7, 9,
  'Phenicia', '21', 'F', 8, 9,
  'Ibnu', '24', 'M', 9, 9,
  'Saefullah', '22', 'M', 10, 9,
  'Cimul', '20', 'M', 11, 9,
  'Afrii', '31', 'M', 12, 9,
  'Toy', '23', 'M', 13, 9,
  'Iy', '28', 'M', 14, 9,
  'Ahmad', '22', 'M', 15, 9,
  'Humed', '38', 'M', 16, 9,
  'Muhammad', '20', 'M', 17, 9,
  'Dholybae', '22', 'M', 18, 9,
  'Mid', '25', 'M', 4, 6,
  'Faiz', '24', 'M', 5, 6,
  'Mam', '23', 'M', 6, 6,
  'Mutima', '34', 'F', 7, 6,
  'Nur', '23', 'M', 8, 6,
  'Aniss', '22', 'F', 9, 6,
  'SriAni', '20', 'F', 10, 6,
  'Khoerul', '26', 'M', 11, 6,
  'Safi', '25', 'M', 12, 6,
  'Sanita', '45', 'M', 13, 6,
  'Ali', '20', 'M', 14, 6,
  'Toyy', '23', 'M', 15, 6,
  'Zidane', '23', 'M', 16, 6,
  'Nurohman', '40', 'M', 17, 6,
  'Nurkholis', '23', 'M', 18, 6,
  'Kadnadi', '23', 'M', 1, 7,
  'Muhammad', '27', 'M', 2, 7,
  'Aldiyansyah', '22', 'M', 4, 10,
  'Ry', '20', 'M', 5, 10,
  'Nayyiroh', '28', 'F', 6, 10,
  'Umar', '21', 'M', 7, 10,
  'Nur', '26', 'F', 8, 10,
  'Bochils', '17', 'F', 9, 10,
  'Haryhono', '23', 'M', 10, 10,
  'Ken', '23', 'M', 11, 10,
  'Kang', '29', 'M', 12, 10,
  'Kang', '37', 'M', 13, 10,
  'Thibbil', '21', 'M', 14, 10,
  'Rian', '23', 'M', 15, 10,
  'Gus', '25', 'M', 16, 10,
  'Devisya', '26', 'F', 17, 10,
  'Ahmad', '25', 'M', 18, 10,
  'Ulfiatus', '24', 'F', 4, 7,
  'Jahidin', '23', 'M', 5, 7,
  'Zen', '23', 'M', 6, 7,
  'Mohammad', '23', 'M', 7, 7,
  'Salsabilah', '22', 'F', 8, 7,
  'Nii', '26', 'M', 9, 7,
  'Putrri', '21', 'F', 10, 7,
  'Patma', '20', 'F', 11, 7,
  'Ayu', '23', 'F', 12, 7,
  'Upie', '24', 'M', 13, 7,
  'Ahmad', '24', 'M', 14, 7,
  'Ajaxx', '21', 'M', 15, 7,
  'Sulis', '23', 'F', 16, 7,
  'Ariiss', '23', 'M', 17, 7,
  'Annisa', '21', 'F', 18, 7,
];

let camera, scene, renderer;
let controls;

const objects = [];
const targets = {
  table: [],
  sphere: [],
  helix: [],
  grid: [],
  cone: []
};

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 3000;

  scene = new THREE.Scene();

  // Create simple object / element of tables
  for (let i = 0; i < table.length; i += 5) {

    const element = document.createElement('div');
    element.className = 'element';

    if (table[i + 2] == 'M') element.style.backgroundColor = 'rgba(3, 138, 255, .6)';
    else element.style.backgroundColor = 'rgba(227, 61, 148, .8)';

    const number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

    const symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);

    const details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    const objectCSS = new CSS3DObject(element);
    objectCSS.position.x = Math.random() * 4000 - 2000;
    objectCSS.position.y = Math.random() * 4000 - 2000;
    objectCSS.position.z = Math.random() * 4000 - 2000;
    scene.add(objectCSS);

    objects.push(objectCSS);

  }

  const vector = new THREE.Vector3();

  loadTable()
  loadSphere(vector)
  loadHelix(vector)
  loadGrid()
  loadCone(vector)
  handleButtonOnClick(targets);
  
  transform(targets.table, 2000);

  renderer = new CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('container').appendChild(renderer.domElement);

  controls = new TrackballControls(camera, renderer.domElement);
  controls.minDistance = 500;
  controls.maxDistance = 6000;
  controls.addEventListener('change', render);

  window.addEventListener('resize', onWindowResize);

}

function loadTable() {
  for (let i = 0; i < table.length; i += 5) {

    const object = new THREE.Object3D();
    object.position.x = (table[i + 3] * 140) - 1330;
    object.position.y = -(table[i + 4] * 180) + 990;
  
    targets.table.push(object);

  }
}

function loadSphere(vector) {
  for (let i = 0, l = objects.length; i < l; i++) {

    const phi = Math.acos(-1 + (2 * i) / l);
    const theta = Math.sqrt(l * Math.PI) * phi;

    const object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    vector.copy(object.position).multiplyScalar(2);

    object.lookAt(vector);

    targets.sphere.push(object);

  }
}

function loadHelix(vector) {
  for (let i = 0, l = objects.length; i < l; i++) {

    const theta = i * 0.175 + Math.PI;
    const y = -(i * 8) + 450;

    const object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    vector.x = object.position.x * 2;
    vector.y = object.position.y;
    vector.z = object.position.z * 2;

    object.lookAt(vector);

    targets.helix.push(object);

  }
}

function loadGrid() {
  for (let i = 0; i < objects.length; i++) {

    const object = new THREE.Object3D();

    object.position.x = ((i % 5) * 400) - 800;
    object.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(i / 25)) * 1000 - 2000;

    targets.grid.push(object);

  }
}

function loadCone(vector) {
  for (let i = 0, l = objects.length; i < l; i++) {

    const radius = i * 4;
    const theta = i * 4 + Math.PI;
    const y = -(i * 10) + 600;

    const object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(radius, theta, y);

    vector.x = object.position.x * 2;
    vector.y = object.position.y;
    vector.z = object.position.z * 2;

    object.lookAt(vector);

    targets.cone.push(object);
  }
}

function handleButtonOnClick() {
  
  for (const target in targets) {
    document
      .getElementById(target)
      .addEventListener('click', function () {

        transform(targets[target], 2000);

      });
  }

}

function transform(targets, duration) {

  TWEEN.removeAll();

  for (let i = 0; i < objects.length; i++) {

    const object = objects[i];
    const target = targets[i];

    new TWEEN.Tween(object.position)
      .to({
        x: target.position.x,
        y: target.position.y,
        z: target.position.z
      }, Math.random() * duration + duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

    new TWEEN.Tween(object.rotation)
      .to({
        x: target.rotation.x,
        y: target.rotation.y,
        z: target.rotation.z
      }, Math.random() * duration + duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

  }

  new TWEEN.Tween(this)
    .to({}, duration * 2)
    .onUpdate(render)
    .start();

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  render();

}

function animate() {

  requestAnimationFrame(animate);

  TWEEN.update();

  controls.update();

}

function render() {

  renderer.render(scene, camera);

}