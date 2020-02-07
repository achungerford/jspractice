// require the module we installed
const request = require('request');
require('dotenv').config();

// bring in API key from a .env file
const api_key = process.env.API_KEY;

// using the example API request
const url = `https://api.darksky.net/forecast/${api_key}/37.8267,-122.4233`;

// making an http request 
request({ url: url, json: true }, (error, response) => {
    console.log(response.body.currently);
});