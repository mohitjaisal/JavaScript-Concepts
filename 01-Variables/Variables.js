// Variables in JavaScript

// Declaring a variable using 'var'
// 'var' is function-scoped and can be re-declared and updated.
var variable1 = "Hello World"; // Declares and initializes variable1 with a string value
console.log(variable1); // Output: Hello World

// Declaring a variable using 'let'
// 'let' is block-scoped and can be updated but not re-declared within the same scope.
let variable2 = 10; // Declares and initializes variable2 with a number value
console.log(variable2); // Output: 10
variable2 = 20; // Updates the value of variable2
console.log(variable2); // Output: 20

// Declaring a variable using 'const'
// 'const' is block-scoped and must be initialized at the time of declaration. It cannot be updated or re-declared.
const variable3 = 30; // Declares and initializes variable3 with a number value
console.log(variable3); // Output: 30
// variable3 = 40; // This will throw an error: Assignment to constant variable.

// Variable Hoisting
// 'var' variables are hoisted to the top of their scope and initialized with 'undefined'.
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

// 'let' and 'const' variables are also hoisted but not initialized. Accessing them before declaration results in a ReferenceError.
try {
    console.log(hoistedLet); // Throws ReferenceError
} catch (e) {
    console.log(e); // Output: ReferenceError: Cannot access 'hoistedLet' before initialization
}
let hoistedLet = "I am not hoisted";

// Block Scope
// Variables declared with 'let' and 'const' are block-scoped.
{
    let blockScopedLet = "I am block scoped";
    const blockScopedConst = "I am also block scoped";
    console.log(blockScopedLet); // Output: I am block scoped
    console.log(blockScopedConst); // Output: I am also block scoped
}
// console.log(blockScopedLet); // Throws ReferenceError: blockScopedLet is not defined
// console.log(blockScopedConst); // Throws ReferenceError: blockScopedConst is not defined

// Function Scope
// Variables declared with 'var' are function-scoped.
function functionScopeExample() {
    var functionScopedVar = "I am function scoped";
    console.log(functionScopedVar); // Output: I am function scoped
}
functionScopeExample();
// console.log(functionScopedVar); // Throws ReferenceError: functionScopedVar is not defined

// Summary
// Use 'let' and 'const' to declare variables to avoid issues with hoisting and scope.
// Use 'const' by default unless you know the variable's value will change.
