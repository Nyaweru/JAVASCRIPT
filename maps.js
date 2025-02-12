//map is a collection of key-value pairs where keys can be of any data type (objects, functions, or primitives). 
//Unlike regular objects, Maps preserve insertion order and allow keys of any type.

const users = new Map();
users.set("John", { age: 25, city: "New York" });
users.set("Mary", { age: 30, city: "London" });
users.set("Peter", { age: 35, city: "Berlin" });

// Checking if a key exists
const hasMary = users.has("Mary");

// Getting a value
const johnInfo = users.get("John");

// Getting the size
const size = users.size;

// Converting Map to an Array
const usersArray = [...users];

// Logging everything at once
console.log({
  "Users Map": users,
  "Contains Mary?": hasMary,
  "John's Info": johnInfo,
  "Map Size": size,
  "Users as Array": usersArray
});
