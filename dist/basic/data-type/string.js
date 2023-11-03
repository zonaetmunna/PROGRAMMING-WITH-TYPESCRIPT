"use strict";
// Using Single Quotes
let singleQuoteString = 'This is a string using single quotes';
console.log(singleQuoteString);
// Using Double Quotes
let doubleQuoteString = "This is a string using double quotes";
console.log(doubleQuoteString);
// Using Backticks (Template Literals)
let backtickString = `This is a string using backticks`;
console.log(backtickString);
// Multiline Strings (using backticks):
let multilineString = `This is a multiline
string using backticks.`;
console.log(multilineString);
// Concatenating Strings
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName; // "John Doe"
console.log(fullName);
// Using Template Literals with Variables
let age = 30;
let personInfo = `My name is ${fullName} and I am ${age} years old.`;
console.log(personInfo);
// Using Template Literals with Expressions
let a = 5;
let b = 10;
let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum);
// String Methods
let text = 'Hello World';
let lowercaseText = text.toLowerCase(); // "hello world"
console.log(lowercaseText);
let uppercaseText = text.toUpperCase(); // "HELLO WORLD"
console.log(uppercaseText);
let index = text.indexOf('World'); // 6
console.log(index);
let replacedText = text.replace('World', 'TypeScript'); // "Hello TypeScript"
console.log(replacedText);
let slicedText = text.slice(0, 5); // "Hello"
console.log(slicedText);
