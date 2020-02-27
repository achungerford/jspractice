// // npm modules
const request = require('request');
require('dotenv').config();
const weather_api_key = process.env.WEATHER_API_KEY;

// Weather request: Lat/Long -> city & weather
const forecast = (longitude, latitude, callback) => {
    
    const url = `https://api.darksky.net/forecast/${weather_api_key}/${longitude},${latitude}`;
    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.');
        }
    });
}


module.exports = forecast;