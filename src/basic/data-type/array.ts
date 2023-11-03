// Declaring an array of a specific type:
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['John', 'Jane', 'Doe'];

// Declaring an array with a generic type parameter:
let simpleNumbers: Array<number> = [1, 2, 3, 4, 5];
let personNames: Array<string> = ['John', 'Jane', 'Doe'];

// Accessing elements in an array:
let _firstNumber: number = numbers[0]; // 1
let secondName: string = names[1]; // "Jane"

// Modifying elements in an array:
names[0] = 'Joe';
numbers[1] = 10;
// Adding elements to an array:
numbers.push(6); // [1, 2, 3, 4, 5, 6]
names.push('Smith');

// Removing elements from an array:
numbers.pop(); // [1, 2, 3, 4, 5]
names.pop();

// Looping through an array:
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

names.forEach(name => console.log(name));

// Using spread operator to create a copy of an array:
let copyOfNumbers = [...numbers];
let copyOfNames = [...names];

// Using the map function to transform elements in an array:
let squaredNumbers = numbers.map(n => n * n); // [1, 4, 9, 16, 25]
