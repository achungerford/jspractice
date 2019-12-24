const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0');

// Create add command, require title as string
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            desc: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Removing note: ' + argv.title);
    }
})

// Create the list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        // placeholder
        console.log('Listing out all the notes');
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