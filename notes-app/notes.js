const fs = require('fs');

const getNotes = function () {
    return 'Your notes...';
}

// job is to save notes to data store
const addNote = function (title, body) {
    const notes = loadNotes();

    notes.push({
        title: title,
        body: body
    });

    saveNotes(notes);
}

// -------- helper functions ----------
// convert notes to strings, store in dataJSON, write to notes.json file
// what is written? Whatever is stored in the dataJSON file
const saveNotes = function (notes) {
    dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

// function for loading notes
const loadNotes = function () {
    // if any of 3 cases fail
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []; 
    }
}

// exports
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}