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
