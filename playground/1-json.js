const fs = require('fs');
const book = {
    title: 'America for Americans',
    author: 'Erika Lee'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);