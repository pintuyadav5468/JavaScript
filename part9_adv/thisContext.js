const person = {
            name:"pintu",
            greet(){
                        console.log(`hello ${this.name}`);
                        
            },
};

person.greet();

const greetFunction = person.greet;
greetFunction(); // hello undefined

const boundGreet = person.greet.bind({name:"John"});
boundGreet(); // hello John

//bind , call and apply 

