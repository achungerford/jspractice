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

// Object destructuring
// To extract property values of an object into individual varialbes.

const product = {
    label: 'Red notebook',
    price: 3,
    qty: 201,
    salePrice: undefined 
}
// old way
// const label = product.label;


// es6 way - inside {}, list properties you want to extract
// when destructuring, you can even include properties that don't yet exist on the object, like rating
const {label, qty, rating} = product;

console.log(label);
console.log(qty);
console.log(rating); // stores undefined




const inventory = {
    item: 'notebook',
    price: 5,
    stock: 100,
    salePrice: undefined
}

// renaming your destructured variable: price -> retailPrice
const {item, price:retailPrice, stock} = inventory;

console.log(item);
console.log(retailPrice);
console.log(stock);



const equipment = {
    machine: 'printer',
    supply: 'ink',
    color: 'black'
}

// set a default value for a property that doesn't yet exist
const {supply, color, cost = 20} = equipment;

console.log(supply);
console.log(color);
console.log(cost);