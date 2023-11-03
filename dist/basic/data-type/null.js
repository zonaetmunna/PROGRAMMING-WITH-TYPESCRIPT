"use strict";
// Declaring a variable with a null value:
let emptyValue = null;
// Assigning a null value to a variable:
let personName = 'John';
personName = null; // This is valid, but the type of 'name' should be 'string | null' to avoid a compile error
// Using null in conditional expressions:
let value = null;
let result = value !== null && value !== void 0 ? value : 'Default Value'; // "Default Value"
// Checking for null using the strict equality operator:
let value = 'Hello';
if (value !== null) {
    console.log('The value is not null.');
}
// Using null in a function argument:
function greet(name) {
    if (name === null) {
        console.log('Hello, guest!');
    }
    else {
        console.log('Hello, ' + name + '!');
    }
}
greet(null); // "Hello, guest!"
