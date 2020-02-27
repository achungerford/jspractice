// require the module we installed
const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
require('dotenv').config();

// city -> longitude/latitude
geocode('Kansas City', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

// longitude/latitude -> weather
forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
  });