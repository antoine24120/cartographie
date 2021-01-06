/*** VARS & MAIN ***/
let error = $('#error')
let userLocation = $('#userLocation')
let userOrientation = $('#userOrientation')
let userMotion = $('#userMotion')
let userTouch = $('#userTouch')

function main() {
    getLocation()
    getDeviceOrientation()
    getDeviceMotion()
    getDeviceTouch()
} main()



/*** FUNCTIONS ***/
function getLocation() {
    navigator.geolocation ?
        navigator.geolocation.getCurrentPosition(showPosition)
        :customerror('Geolocation')
}
function getDeviceOrientation() {
    window.DeviceOrientationEvent ?
        window.addEventListener('deviceorientation', handleOrientationEvent)
        :customerror('DeviceOrientation')

}
function getDeviceMotion() {
    window.DeviceOrientationEvent ?
        window.addEventListener('devicemotion', handleMotionEvent)
        :customerror('DeviceMotion ')
}
function getDeviceTouch() {
    document.addEventListener('touchstart', handleTouchStart)
}



/*** STRINGS ***/
function customerror(response) {
    error.html('ERROR/NOT SUPPORTED : ' + response)
}
function showPosition(position) {

    userLocation.html( 'Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude + '<br><br>')
}
function handleOrientationEvent(e) {
    userOrientation.html('alpha : ' + e.alpha + '<br>beta : ' + e.beta + '<br>gamma : ' + e.gamma + '<br><br>')
}
function handleMotionEvent(e) {
    userMotion.html('x : ' + e.accelerationIncludingGravity.x + '<br>y : ' + e.accelerationIncludingGravity.y + '<br>z : ' + e.accelerationIncludingGravity.z + '<br><br>')
}
function handleTouchStart(e) {
    userTouch.html('touchX : ' + e.touches[0].clientX + '<br>touchY : ' + e.touches[0].clientY)
}
