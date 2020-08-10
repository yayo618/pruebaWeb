var scene, camera, renderer, mesh;
var keyboard = {};
var player = {height:1.8};

function init()
{
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(90, 1200/720,0.1,1000);

	mesh = new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshBasicMaterial({color:0xff9999, wireframe:true})
	);

	scene.add(mesh);

	camera.position.set(0,player.height,-5);
	camera.lookAt(new THREE.Vector3(0,player.height,0));

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(1200,720);
	document.body.appendChild(renderer.domElement);

	animate();
}

function animate()
{
	requestAnimationFrame(animate);

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;
	
	if(keyboard[37]){ //left arrow key
		camera.rotation.y -= Math.PI * 0.01;
	}
	if(keyboard[39]){ //right arrow key
		camera.rotation.y += Math.PI * 0.02;
	}
	

	renderer.render(scene,camera);
}

function keyDown(event)
{
	keyboard[event.keyCode] = true;
}
function keyUp(event)
{
	keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

window.onload = init;
