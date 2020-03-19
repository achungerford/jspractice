/* nodejs script that will create, configure, and start the server.

run script: node src/app.js
keep server running: nodemon src/app.js
*/

const path = require('path');
const express = require('express');
const app = express();  // create app

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');  // absolute path to 'public' directory
const viewsPath = path.join(__dirname, '../templates');          // customizing where your 'views' live, i.e. changing the default

// Setup handlebars engine and views location
app.set('view engine', 'hbs');      // tells express which templating engine we installed (hbs)
app.set('views', viewsPath);        // telling express to use viewsPath (templates)

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

// port 3000 is common development port, starts server
app.listen(3000, () => {
    console.log('Server is up on port 3000');   // never displays in browser
});