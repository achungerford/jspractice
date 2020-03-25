const greeter = (name) => {
    console.log('Hello ' + name);
}

// typical call
greeter('John');

// if no arguments? - undefined
greeter();

// setting a default value for name
const greet = (name = 'User', age) => {
    console.log('Hello ' + name);
}

greet('Jane')   // providing a name
greet();        // no name arg, so default 'User' is used
