// url to fetch ISS location
let url = 'https://api.wheretheiss.at/v1/satellites/25544'

// broken URL for testing
// let url = 'https://api.whereat/v1/satellites/25544'

// Choose the lat and longitude locations to be updated
let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
// Choose the time section to be updated
let issQueryTime = document.querySelector('#time')

// set the update timer to ten seconds
let update = 10000;
// Limit the number of API calls to 3
let maxFailAttempts = 3;

// Set a marker for the map
let issMarker;

// Create the map icon
let issIcon = L.icon({
    iconUrl: 'noun-iss-956251.png',
    // size of the icon
    iconSize:     [38, 38],
    // point of the icon which will correspond to marker's location
    iconAnchor:   [12, 24],
    // point from which the popup should open relative to the iconAnchor
    popupAnchor:  [7, -17]
})

// Set a map to view all of earth
let map = L.map('iss-map').setView([0, 0], 1)  // Center at 0, 0 and max zoom out

// Add the tile layer to populate the map with earths locations
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// call a function until you run out of failed API calls
iss(maxFailAttempts)

// create the function that calls the iss location
function iss(attempts) {

    // display an error if the API site is unreachable
    if (attempts <=0 ) {
        alert('Attempt to search for ISS failed')
        return
    }

    // Fetch the ISs data from the API site
    fetch(url)
        .then( res => res.json())
        .then( issData => {

            // show the date that was collected
            // console.log(issData)

            // create a long and lat out of the json response from the API call
            let lat = issData.latitude
            let long = issData.longitude

            // Set the text of the ISS location details to match the ISS location over earth
            issLat.innerHTML = "ISS-Latitude: " + lat
            issLong.innerHTML = "ISS-Longitude: " + long

            // Display the time the API request was made
            issQueryTime.innerHTML = 'Time Over Earth: ' + Date()

            // display marker if it does not exist, move if it does
            if (!issMarker) {
                issMarker = L.marker([lat, long], {icon: issIcon}).addTo(map)
            } else {
                issMarker.setLatLng([lat, long])
            }
        })
        .catch( err => {
            // on error subtract one from the provided number of API attempts
            attempts--
            console.log('ERROR: ', err)
        })
        .finally( () => {
            // Only collect the API call after ten seconds have passed from the last time that data was returned
        setTimeout(iss, update, attempts)
    })
}


