// // callback pattern - asynchronous
// // setTimout from node API
// setTimeout(() => {
//     console.log('Two seconds are up.');
// }, 2000);


// const names = ['Andrew', 'Jen', 'Jess'];

// // callback pattern - synchronous
// // standard javascript, no api
// const shortNames = names.filter((name) => {
//     return name.length <= 4;
// });


// // geocode example
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
    
//         callback(data)
//     }, 2000);
// }

// geocode('Philadelphia', (firstArgument) => {
//     console.log(firstArgument);
// });


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})