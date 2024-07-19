// Functions in JavaScript

// 1. Function Declaration
// A function declared with the 'function' keyword. It is hoisted to the top of its scope.
function greet(name) {
    // Function parameter 'name' is used to personalize the greeting message
    return `Hello, ${name}!`; // Returns a greeting message
}
console.log(greet("Alice")); // Output: Hello, Alice!

// 2. Function Expression
// A function defined using a variable. It is not hoisted.
const greetUser = function(name) {
    // Function parameter 'name' is used to personalize the greeting message
    return `Hi, ${name}!`; // Returns a greeting message
};
console.log(greetUser("Bob")); // Output: Hi, Bob

// 3. Functions with Default Parameters
// Parameters can have default values, used if no argument is provided.
function welcomeUser(name = "Guest") {
    return `Welcome, ${name}!`; // Returns a welcome message with a default name
}
console.log(welcomeUser()); // Output: Welcome, Guest!
console.log(welcomeUser("Diana")); // Output: Welcome, Diana!

// 4. Functions with Rest Parameters
// Allows a function to accept an indefinite number of arguments as an array.
function sum(...numbers) {
    // 'numbers' is an array containing all arguments passed to the function
    return numbers.reduce((total, num) => total + num, 0); // Returns the sum of all numbers
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// 5. Function Scope and Closures
// Functions have access to variables declared in their outer scope, even after the outer function has finished executing.
function createCounter() {
    let count = 0; // Variable 'count' is scoped to 'createCounter'
    return function() {
        count += 1; // Updates 'count' each time the function is called
        return count;
    };
}
const counter = createCounter(); // 'counter' is a function that increments 'count'
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// 6. Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is executed as soon as it is defined.
(function() {
    console.log("This is an IIFE!"); // Output: This is an IIFE!
})();

// Real-World Example: Shopping Cart
// Function to add items to a shopping cart and calculate the total price.

function ShoppingCart() {
    let items = []; // Array to store items

    // Function to add an item to the cart
    function addItem(name, price) {
        items.push({ name, price });
    }

    // Function to calculate the total price of items in the cart
    function getTotal() {
        return items.reduce((total, item) => total + item.price, 0);
    }

    // Returning the functions to allow external access
    return {
        addItem,
        getTotal
    };
}

const cart = ShoppingCart();
cart.addItem("Apple", 1.5);
cart.addItem("Banana", 2.0);
console.log(cart.getTotal()); // Output: 3.5

// Summary
// - Function Declarations are hoisted.
// - Function Expressions are not hoisted.
// - Use default parameters for optional arguments.
// - Rest parameters handle variable numbers of arguments.
// - Closures allow functions to access outer scope variables.
// - IIFEs execute immediately upon definition.
