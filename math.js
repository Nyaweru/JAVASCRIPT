/*Math.PI for constant.
Math.round, Math.ceil, Math.floor for rounding.
Math.random for generating random numbers.
Math.sqrt for square roots.
Math.abs for the absolute value.
Math.max and Math.min for finding extremes.*/
console.log("Value of PI:", Math.PI); // Output: 3.141592653589793

//Math.round(): Rounds a number to the nearest integer.
//Math.floor(): Rounds a number down to the nearest integer.
//Math.ceil(): Rounds a number up to the nearest integer.
let num = 3.7;

console.log("Math.round(" + num + "):", Math.round(num)); 
console.log("Math.floor(" + num + "):", Math.floor(num)); 
console.log("Math.ceil(" + num + "):", Math.ceil(num));  
//Math.sqrt(): Returns the square root of a number.
//Math.pow(): Returns the value of a base expression raised to a specified power.
let value = 16;

console.log("Math.sqrt(" + value + "):", Math.sqrt(value)); 

console.log("Math.pow(2, 3):", Math.pow(2, 3));               
//Math.abs(): Returns the absolute (positive) value of a number.
let negativeNum = -42;
console.log("Math.abs(" + negativeNum + "):", Math.abs(negativeNum)); 

//Math.random(): Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
let randomNumber = Math.random();
console.log("Random number between 0 and 1:", randomNumber);

let min = 1;
let max = 100;
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random number between 1 and 100:", randomInRange);
let numbers = [10, 20, 30, -5, 100];

console.log("Maximum value:", Math.max(...numbers)); // Output: 100
console.log("Minimum value:", Math.min(...numbers)); // Output: -5
//he spread operator (...) is used here to pass the elements of the array as individual arguments.