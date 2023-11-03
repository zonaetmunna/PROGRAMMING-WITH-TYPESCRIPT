// Declaring a boolean variable:
let isTrue: boolean = true;
let isFalse: boolean = false;

// Using boolean values in if statements:
let personAge: number = 18;

if (personAge >= 18) {
    let isAdult: boolean = true;
    console.log('You are an adult.');
} else {
    let isAdult: boolean = false;
    console.log('You are not an adult.');
}

// Using boolean values in conditional expressions:
let hasPermission: boolean = true;
let message: string = hasPermission ? 'Access granted' : 'Access denied';

// Comparing values:
let firstNumber: number = 5;
let secondeNumber: number = 10;
let isEqual: boolean = (firstNumber === secondeNumber); // false

// Using logical operators:
let isOnline: boolean = true;
let hasUnreadMessages: boolean = false;

let shouldNotify: boolean = isOnline && hasUnreadMessages; // false
let isAvailable: boolean = isOnline || hasUnreadMessages; // true
let isBusy: boolean = !isOnline; // false