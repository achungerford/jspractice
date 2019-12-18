// core, npm, local
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        // note title
        title: {
            describe: 'Note title',
            // requiring the property
            demandOption: true,
            // title must be a string
            type: 'string'
        },
        // note body
        body: {
            desc: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        // title property matches up with above title property
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        // placeholder
        console.log('Removing the note');
    }
})

// Create the list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        // placeholder
        console.log('placeholder: listing out all the notes');
    }
})

// Create the read command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function () {
        // placeholder
        console.log('placeholder: reading a note');
    }
})

yargs.parse();
// console.log(yargs.argv);