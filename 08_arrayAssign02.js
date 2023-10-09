const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
let totalElement = arrayNumbers;
let first = arrayNumbers.shift();
let last = arrayNumbers.pop();
console.log("=============Array Assignment no 2=============================================");
console.log(`total elements in array: ${arrayNumbers.length}` );
console.log("-------------------------------------------------------------------------------");
console.log(`First Element in array is: ${first}, Last element in array is : ${last}`);
console.log("-------------------------------------------------------------------------------");

const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`third last element in array is:  ${arrayNumber[arrayNumber.length-3]}`)
console.log("-------------------------------------------------------------------------------");

let even = [];
for (let index = 0; index < arrayNumber.length; index++) {
    if (arrayNumber[index]% 2 == 0)
    even.push(arrayNumber[index]); {   
    }   
}
console.log(`Even Numbers in an array are:: "${even}"`);
console.log("-------------------------------------------------------------------------------");

let odd = [];
for (let index = 0; index < arrayNumber.length; index++) {
    if (arrayNumber[index]%2!== 0)
    odd.push(arrayNumber[index]); {   
    }   
}
console.log(`Odd Numbers in an array are:: "${odd}"`);
console.log("-------------------------------------------------------------------------------");

let Even = [20,40,60,2];
let sum = 0;
for (let index = 0; index < even.length; index++) {
     sum += even[index];   
}
console.log(`sum of tha even numbers in array is :     " ${sum}"`);
console.log("-------------------------------------------------------------------------------");

let even1 = [31,25,23,11,29,9,11];
let sum1 = 0;
for (let index = 0; index < even1.length; index++) {
     sum1 += even1[index];   
}
console.log(`sum of the odd numbers in array is :     " ${sum1}"`);
console.log("-------------------------------------------------------------------------------");

let array = [20,31,40,25,23,11,29,9,60,2,11];
let addition = 0;
for (let index = 0; index < array.length; index++) {
    addition += array[index];
}
console.log(`Sum of total element in array is:        "${addition}"`);
console.log("-------------------------------------------------------------------------------");

console.log(`115 is available array:     ${array.indexOf(115)}`);
console.log("-------------------------------------------------------------------------------");

console.log(`23 is available array:      ${array.indexOf(23)}`);
console.log("-------------------------------------------------------------------------------");

arrayNumber.splice(3, 0, 55, 66);
console.log(`Insert element 55,66 before index 3 and the number is : ${arrayNumber}`);
console.log("-------------------------------------------------------------------------------");

var removedElements = array.splice(3, 3);
console.log(`That are original elements of array : ${array}`);
console.log("-------------------------------------------------------------------------------");

console.log(`That are deleted elements : ${ removedElements}`);
console.log("-------------------------------------------------------------------------------");

