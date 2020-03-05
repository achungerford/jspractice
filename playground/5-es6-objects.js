// Object property shorthand can be used when
// the value of a property in an object comes from
//  a variable of the same name as the property

const name = 'John';
const userAge = 30;

const user = {
    name,           // works bc 'name' is also 'name' above
    age: userAge,   // must use both bc 'age' != 'userAge'
    location: 'Los Angeles'
}

console.log(user);

/*-------------------------------------------------------------------------------------*/

// Object destructuring - extract property values of an object into individual varialbes.
// const product = {
//     label: 'Red notebook',
//     price: 3,
//     qty: 201,
//     salePrice: undefined 
// }
// 
// /* old way */
// const label = product.label;
// 
// es6 way - inside {}, list properties you want to extract
// you can even include properties that don't yet exist on the object, like rating
// const {label, qty, rating} = product;
// 
// console.log(label);
// console.log(qty);
// console.log(rating); // stores undefined bc it does not yet exist on 'product' object

/*-------------------------------------------------------------------------------------*/

// renaming your destructured variable
// const inventory = {
//     item: 'notebook',
//     price: 5,
//     stock: 100,
//     salePrice: undefined
// }

// const {item, price:retailPrice, stock} = inventory; //price -> retailPrice

// console.log(item);
// console.log(retailPrice);
// console.log(stock);

/*-------------------------------------------------------------------------------------*/

// set a default value for a property that doesn't yet exist
// const equipment = {
//     machine: 'printer',
//     supply: 'ink',
//     color: 'black'
// }
// 
// const {supply, cost = 20} = equipment;
// console.log(supply);
// console.log(cost);

// note, if we were to include a property 'cost' on 'equipment' object with a value,
// the default value would no longer be used. The value in the object's property would be used instead.

/*-------------------------------------------------------------------------------------*/

// create function that accepts object 'product'
const product = {
    label: 'Red notebook',
    price: 3,
    qty: 201,
    salePrice: undefined,
    rating: 4.2
}

const transaction = (type, myProduct) => {
    // destructuring
    const { label } = myProduct;
}

// using an object as 'myProduct'
transaction('order', product);