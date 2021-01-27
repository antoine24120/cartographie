let camera, scene, renderer, mesh

init();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 )
    camera.position.z = 1

    scene = new THREE.Scene()

    mesh = new THREE.Mesh(
        new THREE.BoxGeometry( 0.2, 0.2, 0.2 ),
        new THREE.MeshNormalMaterial()
    );
    scene.add( mesh )

    renderer = new THREE.WebGLRenderer( { antialias: true } )
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.setAnimationLoop( animation )
    document.body.appendChild( renderer.domElement )

}

function animation( time ) {

    mesh.rotation.x = time / 2000
    mesh.rotation.y = time / 2000

    renderer.render(scene, camera)

}