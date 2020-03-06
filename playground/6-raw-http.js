/* Understanding what the 'request' package is doing by
recreating one of our HTTP requests.
*/

const https = require('https');
const url = `www.someURLhere.com`;

// instead of response.body.etc like we get with the npm 'request' package,
// we have to "listen" for each part of the HTTPS response to come in because
// parts of HTTPS requests can arrive at different times
// -- think pages of a letter in separate envelopes (packets)
// bc the letter won't make sense until you receive all the pages

// must listen for each individual chunk to arrive
// must listen for when all chunks have finally arrived

const request = https.request(url, (response) => {

    // need somwhere to store our chunks (from below) until we have all of them
    // and then we can parse it as JSON
    let data = '';

    // response.on allows us to register a handler
    // event name = first argument = 'data' here
    // the callback in here is going to execute when data comes in - 1x or multiple times
    response.on('data', (chunk) => {
        console.log(chunk);
    });

    // figure out when we're done
    // event name = 'end'; the callback gets no arguments, just by running we know its done
    response.on('end', () => {

    });
});

// how the program knows our request is complete
request.end();