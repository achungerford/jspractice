const book = {
    title: 'America for Americans',
    author: 'Erika Lee'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author);