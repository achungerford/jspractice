const fs = require('fs');

const getNotes = function () {
    return 'Your notes...';
}

// job is to save notes to data store
const addNote = function (title, body) {
    
}

// function for removing notes
const loadNotes = function () {
    const dataBuffer = fs.readFileSync('notes.json');
    // convert buffer into string
    const dataJSON = dataBuffer.toString();
    // parse the string
    return JSON.parse(dataJSON);
}

// exports
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}