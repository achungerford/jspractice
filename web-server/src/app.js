/* nodejs script that will create, configure, and start the server.

run script: node src/app.js
keep server running: nodemon src/app.js
*/

const path = require('path');
const express = require('express');

const app = express();  // create app
const publicDirectoryPath = path.join(__dirname, '../public');  // absolute path to 'public' directory

// serve 'public' directory
app.use(express.static(publicDirectoryPath));

// create a help route
app.get('/help', (req, res) => {
    res.send([
        {name: 'Barack H. Obama'},
        {name: 'George W. Bush'},
        {name: 'William J. Clinton'}
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