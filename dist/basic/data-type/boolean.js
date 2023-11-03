"use strict";
// Declaring a boolean variable:
let isTrue = true;
let isFalse = false;
// Using boolean values in if statements:
let personAge = 18;
if (personAge >= 18) {
    let isAdult = true;
    console.log('You are an adult.');
}
else {
    let isAdult = false;
    console.log('You are not an adult.');
}
// Using boolean values in conditional expressions:
let hasPermission = true;
let message = hasPermission ? 'Access granted' : 'Access denied';
// Comparing values:
let firstNumber = 5;
let secondeNumber = 10;
let isEqual = (firstNumber === secondeNumber); // false
// Using logical operators:
let isOnline = true;
let hasUnreadMessages = false;
let shouldNotify = isOnline && hasUnreadMessages; // false
let isAvailable = isOnline || hasUnreadMessages; // true
let isBusy = !isOnline; // false
