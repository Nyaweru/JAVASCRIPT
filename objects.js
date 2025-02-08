// Objects in JavaScript are variables that can hold multiple values as properties.

// Example 1: Object Literal
// Create an object using object literal notation.
const book = {
  type: "NOVEL",        // The type of book
  colour: "orange",     // The colour of the book
  owner: "JOHN"         // The owner of the book
};
// Accessing object properties using dot notation and bracket notation.
console.log("Book type:", book.type);
console.log("Book type:", book["type"]);

// Example 2: Object with Methods
// Create an object with properties and a method to return the full name.
const person = {
  firstName: "Mirry",   // Person's first name
  lastName: "Hayes",     // Person's last name
  // Method that returns the full name by combining firstName and lastName.
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
// Output the full name using the object's method.
console.log("Person's full name:", person.fullName());

// Example 3: Adding and Deleting Properties
// Create another object and add properties to it.
const anotherPerson = {
  firstName: "Mirry",   // Person's first name
  lastName: "Hayes"      // Person's last name
  
};
// Adding a new property 'nationality' to the object.
anotherPerson.nationality = "Kenyan";
console.log("Another Person with nationality:", anotherPerson.nationality);

// Example 4: Nested Objects
// Define an object that contains another object as a property.
const myObj = {
  name: "John",         // Parent object's name property
  age: 30,              // Parent object's age property
  myCars: {             // Nested object containing car properties
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
};
// Access a property from the nested object using dot notation.
console.log("Nested object - Car 2:", myObj.myCars.car2);

// Example 5: Object Constructor Functions
// Define a constructor function to create new Person objects.
function Person(first, last, age, eye) {
  this.firstName = first;   // Person's first name
  this.lastName = last;     // Person's last name
  this.age = age;           // Person's age
  this.eyeColor = eye;      // Person's eye color
}
// Create a new Person object using the constructor.
const man = new Person("John", "Doe", 50, "blue");
// Add a new property to the 'man' object.
man.height = "198";  // This property is added only to this object.
console.log("Man's age:", man.age);
console.log("Man's height:", man.height);

// Example 6: Object Constructor with Methods
// Define a constructor function that includes a method to return the full name.
function PersonWithMethod(first, last, age, eye) {
  this.firstName = first;   // Person's first name
  this.lastName = last;     // Person's last name
  this.age = age;           // Person's age
  this.eyeColor = eye;      // Person's eye color
  // Method to return the full name.
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}
// Create a new PersonWithMethod object.
const woman = new PersonWithMethod("Jane", "Smith", 45, "green");
// Output the full name using the object's method.
console.log("Woman's full name:", woman.fullName());
//key and value
const person1 = new Object();
person1.name = "John";      // Adding key 'name'
person1.age = 30;           // Adding key 'age'
person1.city = "New York";  // Adding key 'city'

console.log(person1);
// Output: { name: 'John', age: 30, city: 'New York' }


