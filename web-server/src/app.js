/* nodejs script that will create, configure, and start the server.

run script: node src/app.js
keep server running: nodemon src/app.js
*/

const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();  // create app

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');  // absolute path to 'public' directory
const viewsPath = path.join(__dirname, '../templates/views');   // customizing where your 'views' live, i.e. changing the default
const partialsPath = path.join(__dirname, '../templates/partials'); // absolute path to partials

// Setup handlebars engine and views location
app.set('view engine', 'hbs');      // tells express which templating engine we installed (hbs)
app.set('views', viewsPath);        // telling express to use viewsPath (templates)
hbs.registerPartials(partialsPath);     // config rendering of partials

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));   // serve 'public' directory

// set up route to serve up views template, render index.hbs view
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'John Doe'
    })
});

// render about.hbs view
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'John Doe'
    })
});

// render help view
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'John Doe',
        helpText: 'this is some helpful text'
    })
});

// create a weather route
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'rain',
        location: 'Los Angeles'
    });
});

// 404 handling all URLs after /help/
app.get('/help/*', (req, res) => {
    res.send('Help article not found.');
});

// 404 handling: * is a wildcard meaning match anything that hasn't been matced yet
// app.get * needs to come AFTER all other requests bc your app looks through routes in order
app.get('*', (req, res) => {
    res.send('My 404 Page');
});

// port 3000 is common development port, starts server
app.listen(3000, () => {
    console.log('Server is up on port 3000');   // never displays in browser
});