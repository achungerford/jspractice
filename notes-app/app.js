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
    handler: function () {
        console.log('placeholder: Adding a new note!');
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('placeholder: removing the note');
    }
})

// Create the list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('placeholder: listing out all the notes');
    }
})

// Create the read command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function () {
        console.log('placeholder: reading a note');
    }
})

console.log(yargs.argv);