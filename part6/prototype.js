let computer = {
            cpu : 12
}
let lenovo = {
            screen : "HD"
}

let TomHardware = {}

// console.log(`compute`, computer.__proto__);

let GenericCar = {
            tyres:4
}
let tesla = {
            driver: "AI"
}

Object.setPrototypeOf(tesla, GenericCar);
// console.log(tesla.__proto__);
// console.log(`tesla`, tesla);
// console.log(`tesla`,GenericCar);
// console.log(`tesla`, tesla.tyres);

console.log(`tesla`, Object.getPrototypeOf(tesla));








