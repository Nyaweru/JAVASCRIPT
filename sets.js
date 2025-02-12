// Creating a new Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add('Hello');
mySet.add({ name: 'John' });

console.log('Set after adding elements:', mySet);

// Checking if a value exists in the Set
console.log('Does the set contain 2?', mySet.has(2)); // true
console.log('Does the set contain 5?', mySet.has(5)); // false

// Deleting a value from the Set
mySet.delete(2);
console.log('Set after deleting 2:', mySet);

// Getting the size of the Set
console.log('Size of the Set:', mySet.size);

// Iterating over a Set
console.log('Iterating through the Set:');
mySet.forEach(value => {
    console.log(value);
});

// Converting Set to an Array
const myArray = Array.from(mySet);
console.log('Set converted to an array:', myArray);

// Clearing all elements in the Set
mySet.clear();
console.log('Set after clearing:', mySet);
// Creating a Set with some duplicate values
const numbers = new Set([1, 2, 3, 3, 4, 5, 5]);

// Adding values to the Set
numbers.add(6);
numbers.add(7);

// Checking for a specific value
const hasThree = numbers.has(3);
const hasTen = numbers.has(10);

// Removing a value
numbers.delete(4);

// Getting the size of the Set
const size = numbers.size;

// Converting Set to an array
const numberArray = [...numbers];

// Logging everything at once
console.log({
  "Set Contents": numbers,
  "Contains 3?": hasThree,
  "Contains 10?": hasTen,
  "Set Size": size,
  "Set as Array": numberArray
});
