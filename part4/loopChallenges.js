// sum of number from 1 to 5 
let sum = 0;
let i =0;
while(i <= 5)
{
            sum += i;
            i++;
}
// console.log(sum); // Output: 15

//countdown from 5 to 1
let countdown = [];
let j = 5;
while(j > 0)
{
            countdown.push(j);
            j--;
}
// console.log(countdown);


//do while loop
/* 
let teaCollection = [];
let tea;

do {
  tea = prompt('Enter your favorite tea (type "stop" to finish):'); // Assign the result to tea
  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");
 */

//do while for total of given number 
let total = 0;
let k = 1;
do {
        total += k ;
            k++;   
} while (k <= 3);
// console.log(total); // Output: 6

//for lop for multiply the given number b 2 

let multipiliedNumber = [];
let num = [2, 4, 6];
for(let i =0; i < num.length; i++)
{
            // multipiliedNumber.push(num[i] * 2);
            // takeNumber = num[i] * 2;
            // multipiliedNumber.push(takeNumber);

}
// console.log(multipiliedNumber); // Output: [4, 8, 12]

// make copies of given cites names in the citylist 

let cityList = ["London", "Tokyo", "Paris" , "New York"];
let cityListCopy = [];
for(let i =0; i < cityList.length; i++)
{
            cityListCopy.push(cityList[i]);
}
console.log(cityListCopy); // Output: ["London", "Tokyo", "Paris", "New York"]


