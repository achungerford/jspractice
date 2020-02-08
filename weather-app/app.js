// require the module we installed
const request = require('request');
require('dotenv').config();

// bring in API key from a .env file
const weather_api_key = process.env.WEATHER_API_KEY;
const map_api_key = process.env.MAP_API_KEY;

// using the example API request
const url = `https://api.darksky.net/forecast/${weather_api_key}/37.8267,-122.4233`;

// making an http request for weather API
request({ url: url, json: true }, (error, response) => {
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.');
});

// using the api to get lattitude & longitude
const map_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${map_api_key}&limit=1`;

// http request for map API
request({ url: map_url, json: true } , (error, response) => {
    console.log('The lattitude and longitude of ' + response.body.features[0].text + ' is ' + response.body.features[0].center + '.');
});