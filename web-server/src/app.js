/* creating our nodejs script that will
create, configure, and start up the server.

run script: node src/app.js
keep server running: nodemon src/app.js
*/

// need the absolute path to index.html;  load in library, store application to variable
const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

// create express app
const app = express();

// serve up directory
app.use(express.static(path.join(__dirname, '../public')))

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
    res.send([
        {name: 'Barack H. Obama'},
        {name: 'George W. Bush'},
        {name: 'Bill Clinton'}
    ]);
});

// create an about route
app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

// create a weather route
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'rain',
        location: 'Los Angeles'
    });
});

// port 3000 is common development port, starts server
app.listen(3000, () => {
    console.log('Server is up on port 3000');   // never displays in browser
});