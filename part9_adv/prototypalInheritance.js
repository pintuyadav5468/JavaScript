function Person(name){
            this.name = name;


}

Person.prototype.greet = function(){
            console.log(`hello, my name is ${this.name}`);
            
};
let pint = new Person("Pintu yadav");
pint.greet(); // hello, my name is Pintu yadav
