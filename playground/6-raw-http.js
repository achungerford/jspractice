/* Understanding what the 'request' package is doing by
recreating one of our HTTP requests.
*/

const https = require('https');
// still need to get this apiURL to work correctly
const apiUrl = `https://api.darksky.net/forecast/${weather_api_key}/40,-75`;

// instead of response.body.etc like we get with the npm 'request' package,
// we have to "listen" for each part of the HTTPS response to come in because
// parts of HTTPS requests can arrive at different times
// -- think pages of a letter in separate envelopes (packets)
// bc the letter won't make sense until you receive all the pages

// must listen for each individual chunk to arrive
// must listen for when all chunks have finally arrived

const request = https.request(apiURL, (response) => {

    // need somwhere to store our chunks (from below) until we have all of them
    // and then we can parse it as JSON
    let data = '';

    // response.on allows us to register a handler
    // event name = first argument, which is 'data' here
    // the callback in here is going to execute when data comes in - one or multiple times
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    // figure out when we're done
    // event name = 'end'; the callback gets no arguments, just by running we know its done
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

// set up another listener for error handling
request.on('error', (error) => {
    console.log('an error occurred', error);
});

// by calling end() the program knows we're done setting up our request and sends it off
request.end();