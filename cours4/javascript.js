let camera = new THREE.PerspectiveCamera(25, 1, 0.1, 1000)
camera.position.z = 5

let height, width
(height = window.innerHeight) > (width = window.innerWidth) ? height = width : width = height

let renderer = new THREE.WebGLRenderer({ canvas: earthCanvas })
renderer.setSize(width, height)

let earth = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshBasicMaterial( {
        map: new THREE.TextureLoader().load('earth_texture.jpg')
    })
)

let countries = new THREE.Group()
$.get({
    url: 'https://restcountries.eu/rest/v2/all',
    success: function(data) {
        data.forEach((item) => {

            let cartesianCountryPos = convertLatitudeLongituteToVector3(item['latlng'][0], item['latlng'][1])

            let posCountry = new THREE.Mesh(
                new THREE.SphereGeometry(0.01, 32, 32),
                new THREE.MeshBasicMaterial( {
                    map: new THREE.TextureLoader().load(item.flag)
                })
            )

            posCountry.position.x = cartesianCountryPos.x
            posCountry.position.y = cartesianCountryPos.y
            posCountry.position.z = cartesianCountryPos.z

            countries.add(posCountry)
        })
    }
})

//scene loader with earth and countries
let scene = new THREE.Scene()
scene.add(earth)
scene.add(countries)

new THREE.OrbitControls(camera, renderer.domElement) //moving the earth

function convertLatitudeLongituteToVector3 (lat, lon) {
    lat *= Math.PI / 180
    lon *= -Math.PI / 180
    return new THREE.Vector3(Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon))
}

function animate () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
} animate() //launch