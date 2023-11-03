// Declaring a variable with a literal type:
let yes: 'yes' = 'yes';
let no: 'no' = 'no';

// Using literal types in a union type:
type Answer = 'yes' | 'no';

let answer1: Answer = 'yes';
let answer2: Answer = 'no';

// Using literal types in function parameters:
function printAnswer(answer: 'yes' | 'no') {
  console.log(answer);
}

printAnswer('yes');
printAnswer('no');

// Using numeric literal types:

type StatusCode = 200 | 404 | 500;

let success: StatusCode = 200;
let notFound: StatusCode = 404;
let serverError: StatusCode = 500;

// Using boolean literal types:
type Toggle = true | false;

let on: Toggle = true;
let off: Toggle = false;

// Using literal types in object properties:
type Size = 'small' | 'medium' | 'large';

type Shirt = {
  size: Size;
  color: string;
};

let smallShirt: Shirt = { size: 'small', color: 'blue' };
let mediumShirt: Shirt = { size: 'medium', color: 'red' };
let largeShirt: Shirt = { size: 'large', color: 'green' };
