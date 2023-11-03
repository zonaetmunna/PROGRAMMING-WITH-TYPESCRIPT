// Using Single Quotes
let singleQuoteString: string = 'This is a string using single quotes';
console.log(singleQuoteString);

// Using Double Quotes
let doubleQuoteString:string = "This is a string using double quotes";
console.log(doubleQuoteString);

// Using Backticks (Template Literals)
let backtickString: string = `This is a string using backticks`;
console.log(backtickString);

// Multiline Strings (using backticks):
let multilineString: string = `This is a multiline
string using backticks.`;
console.log(multilineString);


// Concatenating Strings
let firstName: string = 'John';
let lastName: string = 'Doe';
let fullName: string = firstName + ' ' + lastName; // "John Doe"
console.log(fullName);

// Using Template Literals with Variables
let age: number = 30;
let personInfo: string = `My name is ${fullName} and I am ${age} years old.`;
console.log(personInfo);

// Using Template Literals with Expressions
let a: number = 5;
let b: number = 10;
let sum: string = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum);

// String Methods
let text: string = 'Hello World';
let lowercaseText: string = text.toLowerCase(); // "hello world"
console.log(lowercaseText);

let uppercaseText: string = text.toUpperCase(); // "HELLO WORLD"
console.log(uppercaseText)

let index: number = text.indexOf('World'); // 6
console.log(index);

let replacedText: string = text.replace('World', 'TypeScript'); // "Hello TypeScript"
console.log(replacedText);

let slicedText: string = text.slice(0, 5); // "Hello"
console.log(slicedText);




