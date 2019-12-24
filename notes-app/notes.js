const fs = require('fs');

const getNotes = function () {
    return 'Your notes...';
}

// for adding notes
const addNote = function (title, body) {
    // loading in previous notes
    const notes = loadNotes();

    // loop over notes and return if duplicate titles
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });

    // if no duplicates, add the note
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added');        
    } else {
        console.log('Note title taken!');
    }
}

// for saving notes
const saveNotes = function (notes) {
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

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }    
}

const removeNote = function (title) {
    console.log(title);
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}