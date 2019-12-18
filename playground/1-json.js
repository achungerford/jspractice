const fs = require('fs');
// const book = {
//     title: 'America for Americans',
//     author: 'Erika Lee'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// calling dataBuffer bc return is not a string, but a buffer
const dataBuffer = fs.readFileSync('1-json.json', );
