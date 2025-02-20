//class is a user defined data type. consists members and member functions
//object is an instance of a class
// data abstraction refers to only displaying the relevant information about data to the outside world and hiding the inner implementations.
//encapsulation means wrapping of data into one single unit
//inheritance is the capability of deriving properties and characteristics from another class
//polymorphism is the ability to display in different forms
//dynamic binding is code to be executed in response to a function call is decided during runtime
//message passing is when objects  communicate with one another by sendin and receiving data to eaach other.

//encapsulation also data hiding  ... Encapsulation ensures that data is only accessible where needed.
class User {
  constructor(name, age) {
    this.name = name;
    this.realAge = age; 
  }

  get age() {
    return this.realAge;
  }


  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative");
    } else {
      this.realAge = value; 
    }
  }

  displayInfo() {
    console.log(`User: ${this.name}, Age: ${this.realAge}`);
  }
}

const user1 = new User("Alice", 25);
user1.displayInfo(); // User: Alice, Age: 25

user1.age = -5; // Age cannot be negative
user1.age = 30; // Sets new age
console.log(user1.age); // 30

//Abstraction 
class BankAccount {
  #balance; // Private field

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);

    }
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount("John", 1000);
acc.deposit(500);
console.log(acc.getBalance()); // 1500
//console.log(acc.#balance); // Syntax Error: Private field .... only the necessary info is displayed hiding the inner implementations
 

//inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound(); // Woof! Woof!
console.log(dog.name); // Buddy

//polymorphism ....  subclass can override a method from its parent class.
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
console.log(circle.area()); // 78.54

const rectangle = new Rectangle(10, 5);
console.log(rectangle.area()); // 50




