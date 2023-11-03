// Declaring a numeric Enum:
enum Color {
  Red,
  Green,
  Blue
}

let red: Color = Color.Red; // 0
let green: Color = Color.Green; // 1
let blue: Color = Color.Blue; // 2

// Declaring a string Enum:
enum colors {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}
let redColor: colors = colors.Red; // 'RED'
let greenColor: colors = colors.Green; // 'GREEN'
let blueColor: colors = colors.Blue; // 'BLUE'

// Accessing Enum values and names:
let nameOFColor: string = Color[2]; // 'Blue'
let valueOfColor: Color = Color['Green']; // 1

// Using Enums in switch statements:
function getColorName(color: Color): string {
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

let color: Color = Color.Blue;
let colorName: string = getColorName(color); // 'Blue'
