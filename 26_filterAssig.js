console.log("==== Given arrays number is: [20,11,40,25,37,49,9,90,60,2,19];===");

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const arrayNum = arrayNumbers.filter((currentValue)=>{
return currentValue > 50;
}

);
console.log("==================== Filter assignment B ======================");
console.log(`The greater than 50 numbers in array :  ${ arrayNum}`);

const arrayNum1 = arrayNumbers.filter((currentValue)=>{
 return currentValue %2 ==0;
}
);
console.log("================================================================");
console.log(`The even numbers in array is : ${arrayNum1}`);

const arrayNum2 = arrayNumbers.filter((currentValue)=>{
    return currentValue % 2 !== 0 
   }
   );
   console.log("==============================================================");
   console.log(`The odd numbers in array is : ${arrayNum2}`);
console.log("=================================================================");
   const arrayNum3 = arrayNumbers.filter((currentValue) => {
    return currentValue %5 ==0;

   }
);
    console.log(`All the number are multiple With 5 is: ${arrayNum3}`);   
  console.log("================================================================");
  const arrayNum4 = arrayNumbers.filter((currentValue)=>{
    return currentValue >20 && currentValue < 50;
  }

  );
  console.log(`In the array 20 between 50 numbers is : ${arrayNum4}`);