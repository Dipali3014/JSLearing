var arrayFruit = ["Banana","Apple","Orange","Mango","Water Melon"];
var first = arrayFruit.shift(0);
var last = arrayFruit.pop();
console.log(`First fruit in the basket is:   "${first}"`);
console.log(`Last fruit in the basket is :   "${last}"`);
console.log("=================================================================");

console.log("=================Main array=======================================");

var arrayFruits = ["Banana","Apple","Orange","Mango","Water Melon",];
arrayFruits.unshift("papaya");
console.log( `Add Papaya Before Banana :    ${arrayFruits}`);
console.log("====================================================================");

var arrayFruit1 = ["Banana","Apple","Orange","Mango","Water Melon",];
arrayFruit1.splice(3);

console.log(`Remove mango in array:   ${arrayFruit1}`);
console.log("====================================================================");
var arrayFruit0 = ["Banana","Apple","Orange","Mango","Water Melon",];
arrayFruit0.push("Pineapple");
console.log(`Add Last position of Pineapple:  ${ arrayFruit0}`);
console.log("=====================================================================");

var arrayFruit2 = ["Banana","Apple","Orange","Mango","Water Melon",];
arrayFruit2.splice(4,0,"Dragon Fruit");
console.log(`Dragon Fruit Before Water melon:   ${arrayFruit2}`);
console.log("======================================================================");


var arrayFruit2 = ["Banana","Apple","Orange","Mango", "Dragon Fruit","Water Melon","Pineapple"];
arrayFruit2.splice(2, 1,"Kiwi");
console.log(`Replace fruit orange with Kiwi :   ${arrayFruit2}`);
console.log("======================================================================");

var arrayFruit2 = ["Banana","Apple","Orange","Mango","Dragon Fruit","Water Melon","Pineapple"];
const arrayElements =arrayFruit2.slice(0,5);
console.log(`Starting fruit in array :    ${arrayElements}`);

var arrayFruit2 = ["Banana","Apple","Orange","Mango","Dragon Fruit","Water Melon","Pineapple"];
console.log("========================Last three fruits===============================");
console.log(` First of last element in array is:  ${arrayFruit2[arrayFruit2.length-3]}`);

console.log(` Second of last element in array is:  ${arrayFruit2[arrayFruit2.length-2]}`);
console.log(` End of last element in array is:  ${arrayFruit2[arrayFruit2.length-1]}`);
console.log("============================================================================");
