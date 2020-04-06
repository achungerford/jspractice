console.log('Client-side javascript file is loaded.');

// this code can't be used in a back-end node script
// the 'Fetch API' is not part of javascript. It is a browser-based API for modern browsers.

// since this script is running in client-side JS, using the Fetch API is fine here

// using the Fetch API
fetch('http://localhost:3000/weather?address=Los%20Angeles').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            console.log(data.location);
            console.log(data.forecast);
        }
    });
});

// wire up the search form
const weatherForm = document.querySelector('form');

// code to run when form submitted
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log('testing');
});