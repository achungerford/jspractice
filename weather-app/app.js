// require the module we installed
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
require('dotenv').config();

const address = process.argv[2];

if (!address) {
    console.log('Please provide an address.');
} else {
    // city -> longitude/latitude
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error);
        }
    
        // longitude/latitude -> weather
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
    
            // if both requests worked, code below will run
            console.log(location);
            console.log(forecastData);
        });
    });
}