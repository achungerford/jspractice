// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = () => x * x;

// console.log(square(5));

const event = {
    name: 'Birthday Party',
    guestList: ['Alex', 'Ian', 'Colby', 'Dave'],
    printGuestList() {
        console.log('Guest list for ' + this.name);
        
        this.guestList.forEach((person) => {
            console.log(person + ' is attending ' + this.name);
        });
    }
}

event.printGuestList();