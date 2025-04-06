let car = {
            make:"toyata",
            model : "camry",
            year : 2020,
            start: function(){
                        return `${this.make}, car got started in ${this.year};`
            },

};
// console.log(car.start());

function Person(name, age) {
            this.name = name;
            this.age = age;
}
let john = new Person("John cena", 30);
// console.log(john.name);




function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function () {
    return `${this.type} makes a noise`;
};

Array.prototype.hitesh = function () {
    return `custom method ${this}`;
};

// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray.hitesh()); // Output: "custom method 1,2,3,4,5"

// let myArray2 = [6, 7, 8, 9, 10];
// console.log(myArray2.hitesh()); // Output: "custom method 6,7,8,9,10"


class vechicle{
            constructor(name , mode){
                        this.name = name;
                        this.mode = mode;
            }
            start(){
                        return `${this.name} is started`;
            }
}

class CarClass extends vechicle{
            
            drive(){
                        return `${this.name} is driving`;
            }

}
let mycar = new CarClass("toyota", "camry");
// console.log(mycar.start());
// console.log(mycar.drive());

//enscapsulation 

class BankAccount{
            #balance = 0;
       deposite(amount){
          this.#balance += amount;
          return this.#balance;
            }
            getBalance(){
                        return `${this.#balance}`;
                    }

}

let account = new BankAccount();
// console.log(account.#balance); // undefined
// console.log(account.getBalance()); // 0

// abstraction
//polymorphism
//statci methods
//getter and setter methods


// exercise 1


