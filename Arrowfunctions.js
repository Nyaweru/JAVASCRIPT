let myProduct = (a,b,c) => (10*12*16);
console.log(myProduct());


class Vehicle {
    constructor(model, wheels, colour, engine){
 this.model = model;
  this.wheels= wheels;
 this.colour = colour;
 this.engine = engine;
}
}
 const mycar = new Vehicle("Nissan", 4, "white", 1);
  let  getVehicle = (mycar) => ("model, wheels, colour, engine");
console.log(`this car is ${mycar.model}, and has ${mycar.wheels} wheels, has a ${mycar.colour} colour and ${mycar.engine} engine`)
    

class Bus  extends Vehicle{
    constructor(model, wheels, colour, engine, capacity){
     super(model, wheels, colour, engine);
     this. capacity = capacity;   
    }
}
  const newBus = new Bus ( "Isuzu", 8, "yellow", 1, 55);
   let getBus = (newBus) =>(model, wheels, colur, engine, capacity);
   console.log(`My school acquired a new Bus which is ${newBus.model}, with ${newBus.wheels} wheels and ${newBus.colour} in colour. Also has ${newBus.engine} engine  and has a capacity of ${newBus.capacity}.`);
