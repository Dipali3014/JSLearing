const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
 console.log(" Given Numbers is [20,11,40,25,37,49,9,90,60,2,19] ");
 console.log("=======================================================");
const sum = array_numbers.reduce((runningTotal,value)=>{
return runningTotal+value;
},0);

console.log(`The sum of all numbers in array : ${sum}`);

console.log("========================================================");

const multiNum = array_numbers.filter((currentValue)=>{
return currentValue  %5 ==0;
}) 

console.log(`The numbers of multiple of 5 is : ${multiNum}`);

const sum1 = multiNum.reduce((runningTotal,value)=>{
return runningTotal + value;
})
console.log("========================================================");
console.log(`The sum of the multiple numbers is: ${sum1}`);