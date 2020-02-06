// require the module we installed
const request = require('request');
require('dotenv').config();

const api_key = process.env.API_KEY;

const url = `https://api.darksky.net/forecast/${api_key}/37.8267,-122.4233`;

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});