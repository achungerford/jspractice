/* creating our nodejs script that will
create, configure, and start up the server.

We're going to load in Express, configure it to serve something up,
and then start the server

This script is the starting point to our node applicatoin.
*/

// load in library
const express = require('express');

// variable to store our express application. Express only exposes a single function.
const app = express();

/* express() doesn't take any arguments.
We configure our server using *methods* provided on the application itself.

Imagine we have a single domain 'app.com' and all of it is going to run on a
single Express server, but we'll have multiple routes set up.
-- root route (app.com)
-- slash help (app.com/help)
-- slash about (app.com/about)
*/

// set up server to send a response when someone tries to get something at a specific route
// req is an object that contains info about the incoming request to the server

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

// code to start server - port 3000 is common development port
app.listen(3000);