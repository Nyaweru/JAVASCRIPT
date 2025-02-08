/*for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true*/

// for loop has 3 parts 
/*Initialization: Sets up a loop counter variable.
Condition: The loop continues as long as this condition evaluates to true.
Increment/Decrement: Updates the counter variable after each iteration.*/

// This loop prints numbers from 0 to 4.
for (let i = 0; i < 5; i++) {
  console.log( i);
}
//The for...in loop iterates over the enumerable properties (keys) of an object.
// Define an object with several properties.
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Use for...in to iterate over the object's keys.
for (let key in person) {
  // Access the value using person[key]
  console.log(`${key}: ${person[key]}`);
}
// loop for.... of used for iterating over iterable objects like arrays and strings. 
// Define an array of numbers.
const numbers = [10, 20, 30, 40, 50];

// Use for...of to iterate over the array's values.
for (let num of numbers) {
  console.log(num);
}

// Define a string.
const greeting = "Hello";

// Use for...of to iterate over each character.
for (let char of greeting) {
  console.log("Character from for...of loop:", char);
}

//while loop is used to execute a block of code repeatedly as long as a specified condition remains true
let count = 0; // Initialization

while (count < 5) { // Condition: continue looping as long as count is less than 5
  console.log("Count is:", count); // Output the current count
  count++; // Update: increment the count by 1
}
// do...while loop executes the code block at least once before checking the condition at the end of the loop.
let count1 = 0;

do {
  console.log("Count is:", count1);
  count1++;
} while (count1 < 5);
