//let  is block scoped
//must be declared before use
//cannot be redeclared. 
let a = 5;
let b = 10;
let c = 25;

 function getSum ()  {
    return a+b+c;
 }
 function getProduct(){
   return  a*b*c;

 }
 function getDifference(){
   return c-b-a;
 }
 console.log("sum:", getSum());
 console.log("product:", getProduct());
 console.log ("difference:", getDifference());

//var has global aspect
//can be accessed even outside a block
//can be redeclared : redeclared inside a block also redclares it outside the block
 var x = 5;
 var y = 10;

   function getValue(){
      var x =3 // this redeclares x to 3 
      return x; 
   }

  console.log( "value:", getValue() );

//const cannot be reassigned
//must be assigned a value when being declared 
// does not mean a const value but means a  constant reference to a value
// const can be used to declare arrays, objects, functions
// cannot reasign arrays, objects, but you can change elements of the array, properties of an object.

 const people = [
   {name: "JOY", gender:"female", age:25},
   {name: "BEN", gender:"male", age: 40}
 ];
  console.log("peoples details:");
  people.forEach((person, index) => {
   console.log(`person ${index + 1}:`);
   console.log(`Name ${person.name}`);
   console.log(`Gender ${person.gender}`);
   console.log(`Age ${person.age}`);
  });


  const food =["ugali", "meat", "rice","green bananas"];
   food[2] = "chapati"; // changes index 2 which is rice to chapati
   food.push =" rice";// adds rice to the array
   food.splice (3,1); // removes green bananas which is in index 3
   console.log (food);