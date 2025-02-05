//arrays are special vatriables that can hold more than one value
const cars = ["Saab","Volvo","BMW","Toyota"];
console.log(cars);
 let car = cars [0];
 console.log(cars[0]); // gives the first item of cars
 cars[0] = "subaru"; //changes saab to subaru

 console.log(cars);
 cars[2] = "honda"; //changes BMW to honda
 console.log(cars);
 cars.push("benz");// adds item
 console.log(cars);
 cars.push("nissan");
 console.log(cars);
 cars.pop();// removes an item
 console.log(cars);
 cars.pop();
 console.log(cars);
 cars.pop();
 console.log(cars);
 cars.push("BMW");
 console.log(cars);
  const x = cars.toString(); // converts arrays to string
 console.log(x);

const y = cars.length; //number of array elements
console.log(y);
//accessing last element in an array
let car1 =cars [cars.length -1];
console.log(car1);

//array.forEach() function
const people = ["John", "Mary", "Njoki", "Hellen","Betty","Josphine","Jackson"];

let text = "<ul>";
people.forEach(getList);
text += "</ul>";

function getList(value) {
 // text += "<li>" + value + "</li>";
  text += value +"\n";
}
console.log(text);
// add a value to an array using array.length
cars [cars.length] = "vw";
console.log(cars);

//removing items of an array using shift() and .splice()

let colors = ["Red", "Green", "Blue"]; 
let firstRemoved = colors.shift();// removes the first item

console.log(colors); 
console.log(firstRemoved);


let colors1 = ["Red", "Green", "Blue"];
let removed = colors1.splice(2, 1); //removes item 1 at index2
console.log(colors1);
console.log(removed);




 