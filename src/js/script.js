var scene, camera, renderer, points, line, amountAdd = 0.01;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 640 / 480, 0.1, 1000);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(640, 480);
  document.body.appendChild(renderer.domElement);
  camera.position.z = 9;

  points = [];
  for (var i = -10; i < 10.1; i += 0.1) {
    points.push([i, Math.sin(i), 0]);
  }

  console.log(points)

  line = new MeshLine();
  line.setPoints(points.flat());

  var material = new MeshLineMaterial({
    color: new THREE.Color(0xffff00),
    lineWidth: 0.1,
    // dashArray: 0.1,
    // dashRatio: 0.1
  });

  material.transparent = true;

  mesh = new THREE.Mesh(line, material);
  scene.add(mesh);

  setInterval(()=> {
    amountAdd *= -1
  }, 2000)
  animate();
}

function animate() {

  // points = points.map((point) => [point[0], point[1] * (1 + amountAdd), point[2]]);

  // line.setPoints(points.flat());

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}