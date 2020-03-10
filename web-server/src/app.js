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