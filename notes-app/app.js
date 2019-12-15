const chalk = require('chalk');
// const validator = require('validator');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

// using chalk module
const blueMsg = chalk.blue.inverse.bold('Success!');
console.log(blueMsg);

// process object
/* 
    run: node app.js Alex
    Output should be the messages you expect above and an array of
    that contains three different strings, which you can see are paths.
    Two of them are always provided. 1) The executable to nodejs on your computer
    2) the path to our app.js file
*/
console.log(process.argv[2]);