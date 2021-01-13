navigator.geolocation.getCurrentPosition(function(position) {

    _x = position.coords.longitude
    _y = position.coords.latitude

    let map = L.map('map1').setView([_y, _x], 5);

    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')

    map.addLayer(osmLayer);

    L.marker([_y, _x]).addTo(map)

    L.marker([43.7, 7.25]).addTo(map)

    L.polygon([
        [48.88, 2.32],
        [43.7384, 7.42],
        [44.8412, -0.58]
    ]).addTo(map);
})




