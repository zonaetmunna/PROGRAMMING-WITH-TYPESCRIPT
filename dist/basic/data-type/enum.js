"use strict";
// Declaring a numeric Enum:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let red = Color.Red; // 0
let green = Color.Green; // 1
let blue = Color.Blue; // 2
// Declaring a string Enum:
var colors;
(function (colors) {
    colors["Red"] = "RED";
    colors["Green"] = "GREEN";
    colors["Blue"] = "BLUE";
})(colors || (colors = {}));
let redColor = colors.Red; // 'RED'
let greenColor = colors.Green; // 'GREEN'
let blueColor = colors.Blue; // 'BLUE'
// Accessing Enum values and names:
let nameOFColor = Color[2]; // 'Blue'
let valueOfColor = Color['Green']; // 1
// Using Enums in switch statements:
function getColorName(color) {
    switch (color) {
        case Color.Red:
            return 'Red';
        case Color.Green:
            return 'Green';
        case Color.Blue:
            return 'Blue';
        default:
            return 'Unknown';
    }
}
let color = Color.Blue;
let colorName = getColorName(color); // 'Blue'
