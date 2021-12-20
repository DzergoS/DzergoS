import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

let figure,
  size,
  geometry,
  material,
  shape,
  menu = document.querySelector(".menu");

function createFigure() {
  figure = document.querySelector("select").value;
  size = document.querySelector("input").value;
  if (!document.querySelector("input").value) return alert("no size");
  material = new THREE.MeshStandardMaterial({ color: 0xffff00 });

  switch (figure) {
    case "Куб":
      geometry = new THREE.BoxGeometry(size, size, size);
      break;
    case "Сфера":
      geometry = new THREE.SphereGeometry(size, size, size);
      break;
    case "Пирамида":
      geometry = new THREE.ConeGeometry(size, size, 4);
      break;
    default:
      break;
  }

  shape = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  shape.position.set(x, y, z);
  scene.add(shape);
  createTab(shape);
}

function createTab(shape) {
  let newElem = document.createElement("p"),
    btn = document.createElement("button"),
    img = document.createElement("img");

  const text = document.createTextNode(shape.uuid);

  btn.onclick = () => {
    scene.remove(shape);
    newElem.remove();
  };

  img.src = "close.png";

  btn.appendChild(img);
  newElem.append(text, btn);
  menu.append(newElem);
}

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createFigure();
});

function delete3DOBJ(objName) {
  var selectedObject = scene.getObjectByName(objName);
  scene.remove(selectedObject);
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

animate();
