// callback pattern - asynchronous
// setTimout from node API
setTimeout(() => {
    console.log('Two seconds are up.');
}, 2000);


const names = ['Andrew', 'Jen', 'Jess'];

// callback pattern - synchronous
// standard javascript, no api
const shortNames = names.filter((name) => {
    return name.length <= 4;
});


// geocode example
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
    
        callback(data)
    }, 2000);
}

geocode('Philadelphia', (firstArgument) => {
    console.log(firstArgument);
});