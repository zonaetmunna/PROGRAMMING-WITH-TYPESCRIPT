"use strict";
// Declaring a Tuple with fixed types:
let coordinates = [10, 20];
// Accessing Tuple elements:
let x = coordinates[0]; // 10
let y = coordinates[1]; // 20
// Modifying Tuple elements:
coordinates[0] = 30;
coordinates[1] = 40;
// Using Tuples in function parameters and return types:
function getCoordinates() {
    return [10, 20];
}
function addCoordinates(coord1, coord2) {
    return [coord1[0] + coord2[0], coord1[1] + coord2[1]];
}
let coord1 = [10, 20];
let coord2 = [30, 40];
let sumOfCoordinates = addCoordinates(coord1, coord2); // [40, 60]
// Using the ... (spread) operator with Tuples:
let coord3 = [10, 20];
let coord4 = [30, 40];
let coords = [...coord3, ...coord4]; // [10, 20, 30, 40]
