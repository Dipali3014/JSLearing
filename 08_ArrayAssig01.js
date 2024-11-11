console.log("Q1.Sum Of array numbers===========================");
let arrayNum = [22, 11, 44, 55, 77, 33];
let sum = 0;
for (let index = 0; index < arrayNum.length; index++) {
     sum += arrayNum[index];   
}
console.log(`sum number of array is :     " ${sum}"`);
console.log("Q2.Even numbers in array ===========================");
 

let arrayNumber = [22,11,44,55,77,33];
let even = [];
for (let index = 0; index < arrayNumber.length; index++) {
    if (arrayNumber[index]% 2 == 0)
    even.push(arrayNumber[index]); {   
    }   
}
console.log(`Even Numbers in an array are:: "${even}"`);
// use for loop
const fruits= ["Apple","Mango","Orange","Strawberry","Grapes","Mango","Orange"];
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(`${element}`);
    
}
 console.log("============================================================");
//use for in loop
 const fruits1= ["Apple","Mango","Orange","Strawberry","Grapes"];
for (const element in fruits1){
    console.log(fruits1[element]);
}

console.log("=============================================================");

const string = 'code';
for (let i of string){
    console.log(i);
}