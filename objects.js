// objects are variables but with different values
//variables are containers for data values

//assign so many value to an object  book
//objects are defined using object literal;new keyword and object constructor
 const book = {type:"NOVEL", colour: "orange", owner:"JOHN"} ; // object literal method to define java script cbject
// object literal is a list of name:value pairs inside curly braces

 //accessing object property : (objectname.propertyName)/objectname["propertyname"]
book.type; 
book["type"];
 
//methods are actions perfomed on objects
// are function definition stored as property  values
const person = {
    firstName: "Mirry",
    lastName: "Hayes",
    id: 5678,
    fullName: function() {
      return this.firstName + " " + this.lastName; // output is Mirry Hayes
    }
  };

  // primitive values hae no properties and methods and are immutable. hard coded whereas objects are mutable.

  const person = {
    firstName: "Mirry",
    lastName: "Hayes",
    id: 5678,
  };
  // adding a property.
  person.nationality ="kenyan";
  delete person.id ; //deletes property id


  //nested objects: properties can be other objects 
  myObj = {
    name:"John",
    age:30,
    myCars: {
    car1:"Ford",
 car2:"BMW",
 car3:"Fiat"
    }
    }
    //access such you use dot notation or bracket method

    myObj.myCars.car2;