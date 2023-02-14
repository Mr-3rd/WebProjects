


let metroAreaCenterCoordinates = [44.96, -93.2]  // Array of latitude and longitude
let zoomLevel = 10   // 1 = whole world, 10 = large city, 20 = city blocks
// let metroAreaCenterCoordinates = [44.96, 93.2]

// Create the map  (use the div id to draw the map) > Set view using above parameters
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

// New Campus setup for loop
campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] },
    {"name": "Northland College", "website": "https://www.northlandcollege.edu/", "coordinates": [48.12521620521236, -96.1624066830169]}
]


campuses.map(campus => {
    let marker = L.marker(campus.coordinates)
        .bindPopup(`${campus.name}<br><a href="${campus.website}" target="_blank">Website</a>`)
        .addTo(map)
})


// // Add some markers for Minneapolis College and Saint Paul College
// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minnepolis College<br><a href="https://minneapolis.edu" target="_blank">Website</a>')
//     .addTo(map)
//
// let stPaulCoordinates = [44.94839, -93.1099]
// let stpMarker = L.marker(stPaulCoordinates)
//     .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu" target="_blank">Website</a>')
//     .addTo(map)
//
// let normandaleCordinates = [44.8297, -93.3312]
// let nrmMarker = L.marker(normandaleCordinates)
//     .bindPopup('Normandale College<br><a href="https://www.normandale.edu/" target="_blank">Website</a>')
//     .addTo(map)

// Add a circle approximately around the Twin Cities metro 
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
        color: 'purple',    // use any CSS color name
        radius: 30000,
        fillOpacity: 0.03
    })
    .bindPopup("Twin Cities Metro Area")
    .addTo(map)
