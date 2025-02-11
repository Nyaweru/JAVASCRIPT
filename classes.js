// Classes in JavaScript

// Defining a basic class
class Person {
    // Constructor method (called when a new object is created)
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to introduce the person
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the Person class
const person1 = new Person('Alice', 25);
person1.introduce(); // Output: Hello, my name is Alice and I am 25 years old.

// Inheritance in JavaScript Classes
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Calls the parent class constructor
        this.jobTitle = jobTitle;
    }

    // Overriding a method
    introduce() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.jobTitle}.`);
    }
}

// Creating an instance of the Employee class
const employee1 = new Employee('Bob', 30, 'Software Engineer');
employee1.introduce(); // Output: Hello, my name is Bob, I am 30 years old, and I work as a Software Engineer.

// Static Methods (can be called without instantiating the class)
class MathOperations {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathOperations.add(5, 3)); // Output: 8

// Getters and Setters
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get area() {
        return this._width * this._height;
    }

    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log('Width must be positive');
        }
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // Output: 50
rect.width = 7;
console.log(rect.area); // Output: 70
