// core, npm, local
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title'
        }
    },
    handler: function (argv) {
        // placeholder
        console.log('Adding a new note!', argv);
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

console.log(yargs.argv);