// require the module we installed
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
require('dotenv').config();

// city -> longitude/latitude
geocode('Boston', (error, data) => {
    if (error) {
        return console.log(error);
    }

    // longitude/latitude -> weather
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }

        // if both requests worked, code below will run
        console.log(data.location);
        console.log(forecastData);
    });
});