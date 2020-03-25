console.log('Client-side javascript file is loaded.');

// this code can't be used in a back-end node script
// the 'Fetch API' is not part of javascript. It is a browser-based API for modern browsers.

// since this script is running in client-side JS, using the Fetch API is fine here

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    });
});