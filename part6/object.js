function person(name, age) {
  this.name = name;
  this.age = age;
}

function car (make, model) {
  this.make = make;
  this.model = model;
}
let myCar = new car("Toyota", "Corolla");
let myNewcar = new car("Toyota", "Corolla");
// console.log(`myCar`, myCar);
// console.log(`myNewcar`, myNewcar);

// console.log(myCar);
// console.log(myNewcar);

function tea(type)
{
            this.type = type
            this.describe = function(){
                        return `this is a cup of ${this.type} tea`;

            } 
}
let lemonTea = new  tea(" lemon tea");
// console.log(lemonTea.describe());

function Animal(species){
            this.species = species;
}
Animal.prototype.speak = function(){
            return `${this.species} makes a noise`;
}
// let dog = new Animal("Dog");
// let cat = new Animal("Cat");
// console.log(dog.speak());
// console.log(cat.speak());
// console.log(dog.species);           
// console.log(cat.species);
// console.log(dog.__proto__);
// console.log(cat.__proto__);
// console.log(dog.__proto__ === cat.__proto__); // true

function Drink(name){
            if(!new.target){
                        throw new Error("Drink constructor must be called with new key word");                     
            }
            this.name = name;

}
let myTea = new Drink("tea");
let newTea = Drink("coffe");
// console.log(tea);
console.log(newTea);
