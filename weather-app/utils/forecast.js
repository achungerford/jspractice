// // npm modules
const request = require('request');
require('dotenv').config();
const weather_api_key = process.env.WEATHER_API_KEY;

// Weather request: Lat/Long -> city & weather
const forecast = (latitude, longitude, callback) => {
    
    const url = `https://api.darksky.net/forecast/${weather_api_key}/${latitude},${longitude}`;
    
    request({url: url, json: true}, (error, response) => {
        if (erorr) {
            
        } else if (condition) {
            
        } else {
            
        }
    })
}


module.exports = forecast;