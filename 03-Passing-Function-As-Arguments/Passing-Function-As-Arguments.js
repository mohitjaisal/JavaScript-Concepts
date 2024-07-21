// A function is a block of code designed to perform a particular task.
// In JavaScript, functions can be passed as arguments to other functions.

// This is a simple function that takes a number and returns its square.
function square(num) {
    return num * num;
}

// This is a higher-order function that takes a function and a value as arguments.
// It applies the given function to the given value.
function applyFunction(func, value) {
    // `func` is expected to be a function, and `value` is the argument to be passed to `func`.
    return func(value);
}

// We can pass the `square` function as an argument to `applyFunction`.
const result = applyFunction(square, 5);

// The result of applying `square` to 5 will be 25.
console.log(result); // Output: 25

// Functions can also be defined inline when passed as arguments.
// This is known as an anonymous function or lambda function.
const result2 = applyFunction(function(num) {
    return num + 10;
}, 7);

// The result of adding 10 to 7 will be 17.
console.log(result2); // Output: 17

// Another example: using array methods that accept functions as arguments.

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// `map` is a method that creates a new array populated with the results of calling a provided function on every element in the calling array.
const squares = numbers.map(function(num) {
    return num * num;
});

// This will create a new array of squares: [1, 4, 9, 16, 25]
console.log(squares); // Output: [1, 4, 9, 16, 25]

// Another array method example: `filter` method
// `filter` creates a new array with all elements that pass the test implemented by the provided function.
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

// This will create a new array with only even numbers: [2, 4]
console.log(evenNumbers); // Output: [2, 4]

// Real-world example: sorting an array of objects

// Array of objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 30 }
];

// `sort` is a method that sorts the elements of an array in place and returns the sorted array.
// It takes a compare function as an argument to determine the order of the elements.
users.sort(function(a, b) {
    // Compare the age properties of two users
    return a.age - b.age;
});

// The `users` array is now sorted by age: [{ name: 'Bob', age: 22 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]
console.log(users);

// Functions can also be stored in variables and passed as arguments.
// This can be useful for more dynamic and flexible code.

// Store a function in a variable
const increment = function(num) {
    return num + 1;
};

// Pass the `increment` function to `applyFunction`
const result3 = applyFunction(increment, 10);

// The result of incrementing 10 by 1 will be 11.
console.log(result3); // Output: 11

// Summary: 
// - Functions can be passed as arguments to other functions.
// - This allows for higher-order functions, which can operate on other functions.
// - Common use cases include array methods like `map`, `filter`, and `sort`.
// - This feature allows for more flexible and reusable code.
