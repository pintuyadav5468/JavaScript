
/* 1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.

 */
let teaFlavors = ["green tea", "black tea", "oolong tea"];
 const firstTea = teaFlavors[0];
// console.log(firstTea); // Output: green tea

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];
// console.log(favoriteCity); // Output: Paris

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teatypes = ["herbal tea" , "white tea", "masala chai"];
teatypes[1] = "jasmine tea";
// console.log(teatypes);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
let citiesVisited = ["mimbai", "sydney"];
citiesVisited.push("berlin");
// console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const  lastOrder = teaOrders.pop();
// console.log(lastOrder); // Output: earl grey

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas= popularTeas;
// console.log(softCopyTeas); // Output: ["green tea", "oolong tea", "chai"]
softCopyTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas); // Output: ["green tea", "oolong tea"]
// Output: ["green tea", "oolong tea", "chai"]

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// console.log(hardCopyCities); // Output: ["Berlin", "Singapore", "New York"]
hardCopyCities.pop();
// console.log(topCities); // Output: ["Berlin", "Singapore"]
// console.log(hardCopyCities); // Output: ["Berlin", "Singapore", "New York"]/

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
//  console.log(worldCities); // Output: ["Paris", "Rome", "Tokyo", "Bangkok"]
// console.log(europeanCities); // Output: ["Paris", "Rome"]
// console.log(asianCities); // Output: ["Tokyo", "Bangkok"]

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
let teaMenu = ["masala chai", "oolong teaa", "green tea", "earl grey"];
let menuLength = teaMenu.length;
// console.log(menuLength); // Output: 4
// console.log(teaMenu); // Output: ["masala chai", "oolong tea", "green tea", "earl grey"]
// console.log(teaMenu[0]); // Output: masala chai


/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
// console.log(isLondonInList); // Output: true
//  console.log(cityBucketList); // Output: ["Kyoto", "London", "Cape Town", "Vancouver"]
//  console.log(isLondonInList); // Output: true













