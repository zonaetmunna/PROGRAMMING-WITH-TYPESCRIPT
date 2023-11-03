"use strict";
// Using optional properties in a class:
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let person1 = new Person('John');
let person2 = new Person('Jane', 'Doe');
console.log(person1.firstName); // 'John'
console.log(person1.lastName); // undefined
console.log(person2.firstName); // 'Jane'
console.log(person2.lastName); // 'Doe'
// Using optional parameters in a function:
function greet(firstName, lastName) {
    if (lastName) {
        console.log(`Hello, ${firstName} ${lastName}!`);
    }
    else {
        console.log(`Hello, ${firstName}!`);
    }
}
greet('John'); // 'Hello, John!'
greet('Jane', 'Doe'); // 'Hello, Jane Doe!'
let address1 = {
    street: '123 Main St',
    city: 'Anytown'
};
let address2 = {
    street: '456 Elm St',
    city: 'Somewhere',
    state: 'CA'
};
console.log(address1.street); // '123 Main St'
console.log(address1.city); // 'Anytown'
console.log(address1.state); // undefined
console.log(address2.street); // '456 Elm St'
console.log(address2.city); // 'Somewhere'
console.log(address2.state); // 'CA'
