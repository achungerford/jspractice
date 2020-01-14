const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

// for adding notes
const addNote = (title, body) => {
    // loading in previous notes
    const notes = loadNotes();

    // loop over notes and return if duplicate titles
    const duplicateNotes = notes.filter((note) => note.title === title);

    // if no duplicates, add the note
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));        
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

// for saving notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

/*
    When we add a note, we don't want to overwrite
    previous notes so we first have to load in previous
    notes. loadNotes() loads in past notes. We call it above.

    Read in the data, saved in buffer format.
    Convert buffer to strings, save as JSON.
    Parse the JSON and return it as a note.
*/

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }    
}

const removeNote = (title) => {
    const notes = loadNotes();

    // looping over notes, find ones to be kept: keep-true, remove-false
    const notesToKeep = notes.filter((note) => note.title !== title);

    // compare lengths of our two arrays to see if note was removed
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        
        // save new array
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    
    console.log(chalk.inverse('Your Notes'));
    
    notes.forEach((note) => {
        console.log(note.title);
    });
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}