const fs = require('fs');

const getNotes = function () {
    return 'Your notes...';
}

// job is to save notes to data store
const addNote = function (title, body) {
    const notes = loadNotes();
    console.log(notes);
}

// function for removing notes
const loadNotes = function () {
    // code in case notes.json file not present
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        // convert buffer into string
        const dataJSON = dataBuffer.toString();
        // parse the string
        return JSON.parse(dataJSON);
    } catch (e) {
        // if no notes.json
        return []; 
    }
}

// exports
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}