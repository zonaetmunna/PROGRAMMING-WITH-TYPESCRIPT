// Declaring a Tuple with fixed types:
let coordinates: [number, number] = [10, 20];

// Accessing Tuple elements:
let x: number = coordinates[0]; // 10
let y: number = coordinates[1]; // 20

// Modifying Tuple elements:
coordinates[0] = 30;
coordinates[1] = 40;

// Using Tuples in function parameters and return types:
function getCoordinates(): [number, number] {
  return [10, 20];
}

function addCoordinates(coord1: [number, number], coord2: [number, number]): [number, number] {
  return [coord1[0] + coord2[0], coord1[1] + coord2[1]];
}

let coord1: [number, number] = [10, 20];
let coord2: [number, number] = [30, 40];
let sumOfCoordinates: [number, number] = addCoordinates(coord1, coord2); // [40, 60]

// Using the ... (spread) operator with Tuples:
let coord3: [number, number] = [10, 20];
let coord4: [number, number] = [30, 40];
let coords: [number, number, number, number] = [...coord3, ...coord4]; // [10, 20, 30, 40]
