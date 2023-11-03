
// Declaring a variable with a null value:
let emptyValue: null = null;

// Assigning a null value to a variable:

let personName: string = 'John';
personName = null; // This is valid, but the type of 'name' should be 'string | null' to avoid a compile error

// Using null in conditional expressions:
let value: string | null = null;

let result: string = value ?? 'Default Value'; // "Default Value"

// Checking for null using the strict equality operator:
let value: string | null = 'Hello';

if (value !== null) {
    console.log('The value is not null.');
}
// Using null in a function argument:
function greet(name: string | null) {
    if (name === null) {
        console.log('Hello, guest!');
    } else {
        console.log('Hello, ' + name + '!');
    }
}

greet(null); // "Hello, guest!"