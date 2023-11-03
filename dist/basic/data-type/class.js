"use strict";
// Declaring a class:
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    startEngine() {
        console.log('Engine started');
    }
}
// Creating an object using a class:
let car1 = new Car('Toyota', 'Camry', 2020);
// Accessing properties and methods of an object:
console.log(car1.make); // 'Toyota'
console.log(car1.model); // 'Camry'
console.log(car1.year); // 2020
car1.startEngine(); // 'Engine started'
// Extending a class with inheritance:
class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }
    startEngine() {
        console.log('Electric engine started');
    }
}
let electricCar1 = new ElectricCar('Tesla', 'Model S', 2020, 300);
console.log(electricCar1.make); // Error: Property 'make' is private and only accessible within class 'Car'.
console.log(electricCar1.model); // 'Model S'
console.log(electricCar1.year); // Error: Property 'year' is protected and only accessible within class 'Car' and its subclasses.
console.log(electricCar1.range); // 300
electricCar1.startEngine(); // 'Electric engine started'
/* -------------------------------------------------------------------------------------------------------------------------*/
// Using private and public access modifiers:
class Carr {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    startEngine() {
        console.log('Engine started');
    }
}
let carr1 = new Car('Toyota', 'Camry', 2020);
console.log(car1.model); // 'Camry'
car1.startEngine(); // Error: Property 'startEngine' is private and only accessible within class 'Car'.
