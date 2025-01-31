// data types'
// String, Number, Bigint,Boolean,Undefined,Null, Symbol,Object
 
//string - used for storing texts

 let country = "KENYA";
 //can use double or single quotes

 // adding a number to a string treats the number as a string to
  let y = 12 + "cats";
  // the ouput will be 12 cats
   let y1 = "cats" + 12
   // result  will be cats 12

// To find the length of a string 
 let text = "it is possible for a willing heart";
 let length = text.length;
 //defined as objects using new keyword (complicates code)
 let j = new String("John Doe");

 /*String methods - at, charAt,charCodeAt
 charAt() is for  a character at a specified position
 */
   let this  = "HELLO JAVASCRIPT";
   let char = this.charAt(2); // output is L
 // extracting parts of a string

 let text = "Apple, Banana, Kiwi";

let part = text.slice(7); // extracts from position 7
let part = text.slice(7,13) ; //extracts banana

 
const school = "ROOTS ACADEMY"; // at() method returns the character at a specified index (position) in a string.
let letter = school.at(2);//  gives 0

//joining 2 or more strings using concat()
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

// trim() removes whitespaces
let text ="  javascript ";
let texts = text.trim(); 

//The padStart() method pads a string from the start.
let str = "5";
let padded = str.padStart(4,"0"); //should give 0005

//padEnd() method pads a string from the end.
   
// Numbers
   // stored as decimal numbers (floating points) either be with decimals or not
   let PI = 3.14;
    
   //Exponential notation .For extra small and extra large numbers

   let x = 520e8;

   let d = 12; //int
   let e = BigInt("987654339876465432");


   //Booleans
   //true or false
   let f = 10;
   let i = 8;
   (f == i) //false.

   //Arrays. with square brackets
   const cars =["subaru", "toyota","honda"];
 
   //javascript objects. written with curly braces
const person ={name:"MIRRIAM", age:"23", gender:"female"};

//typeof operator to find the type of a variable
typeof []; //gives object
typeof " student"; //gives string
typeof 14; // gives number 
typeof BigInt(123456789); //gives bigint

// a variable without a value is undefined and is type is also undefined
