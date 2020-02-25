// require the module we installed
const request = require('request');
require('dotenv').config();

// bring in API key from a .env file
const weather_api_key = process.env.WEATHER_API_KEY;
const map_api_key = process.env.MAP_API_KEY;

// Weather request: Lat/Long -> weather
// const url = `https://api.darksky.net/forecast/${weather_api_key}/37.8267,-122.4233`;

// // error handling
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service.');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.');
//     }
// });

// // Geocoding request: address -> Lat/Long
// const map_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${map_api_key}`;

// // http request for map API. Note that geocoordinates for lat/long are usually presented as [longitdue, latitude].
// request({ url: map_url, json: true } , (error, response) => {
//     if (error) {
//         console.log('Unable to access geolocation services!');
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.');
//     } else {
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1]; 
//         console.log(response.body.features[0].text + ', latitude: ' + latitude + ', longitude: ' + longitude);
//     }
// });

// example function call
geocode('Philadelphia', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});