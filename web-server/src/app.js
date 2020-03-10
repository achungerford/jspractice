/* creating our nodejs script that will
create, configure, and start up the server.

run script: node src/app.js
keep server running: nodemon src/app.js
*/

// load in library, store application to variable
const express = require('express');
const app = express();

/*
root route (app.com)
help route (app.com/help)
about route (app.com/about)
weather route (app.com/weather)
*/

// create root route
app.get('/', (req, res) => {
    res.send('<h1>Weather</h1>');
});

// create a help route
app.get('/help', (req, res) => {
    res.send('Help page');
});

// create an about route
app.get('/about', (req, res) => {
    res.send('About page');
});

// create a weather route
app.get('/weather', (req, res) => {
    res.send('Weather page');
});

// port 3000 is common development port, starts server
app.listen(3000, () => {
    console.log('Server is up on port 3000');   // never displays in browser
});