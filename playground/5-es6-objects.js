// Object property shorthand
// when the value of a property in an object comes from a variable of the same name as the property

const name = 'John';
const userAge = 30;

const user = {
    name,
    age: userAge,
    location: 'Los Angeles'
}

console.log(user);