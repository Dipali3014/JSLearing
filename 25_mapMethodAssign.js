

const array = [20,11,40,25,23,11,9,31,2,19];
 const arrayNum = array.map((currentValue)=>{
  return currentValue+10;

 });

 console.log("Given Array is ==> [20,11,40,25,23,11,9,31,2,19]");
 console.log("==================================================================================");
 console.log(`Additaion with 10 All element in array :${arrayNum}`);
console.log("=====================================================================================");
 const arrayNum1 = array.map((currentValue)=>{
    return currentValue*currentValue*currentValue;
  
   });
   console.log(`Cube of All elements in array is: ${arrayNum1}`);
console.log("===================================================================================");
   const arrayNum2 = array.map((currentValue,index)=>{
    return currentValue+index;
  
   });
   console.log(`Index of each elements : ${arrayNum2}`);