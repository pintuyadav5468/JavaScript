//function question 
function greet(name) {
//   console.log(`Hello, ${name}!`);
}

greet("pintu");

//problem 1 
function makeTea(typeofTea){
            return `making ${typeofTea}`;
}
let getorder = makeTea("green tea");
// console.log(getorder);

//problem 2 function under function

function orderTea(teaType){
            function confirmOrder(){
                        return `order confirmed`;
            }
            return confirmOrder();
}
let orderConfimation = orderTea("green tea");
// console.log(orderConfimation);

//problem 3 arrow function

// function greet(){};

// const greet = () => {};

const calculateTotal = (price , qunatity) =>{
            return price * qunatity;
}
let total = calculateTotal(499, 100);
// console.log(total);

//problem 4 function 


