const fs = require('fs');
// const book = {
//     title: 'America for Americans',
//     author: 'Erika Lee'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// calling dataBuffer bc return is not a string, but a buffer
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();

// // parsing our saved dataJSON
// const data = JSON.parse(dataJSON);
// console.log(data.title);


//
// --------- tutorial challenge ----------
// read the data into buffer
const profileBuffer = fs.readFileSync('1-json.json');
console.log(profileBuffer);
// convert buffer to string
const profileJSON = profileBuffer.toString();
console.log(profileJSON);
// parse into object, user
const user = JSON.parse(profileJSON);
console.log(user);

// change the data
user.name = 'Barack'
user.age = 58

console.log(user);
// stringify user object
const userJSON = JSON.stringify(user);
console.log(userJSON);
// write the data stored in userJSON string to file called 1-json.json
fs.writeFileSync('1-json.json', userJSON);