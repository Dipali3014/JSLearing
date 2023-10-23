const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
arrayRollNumbers.reverse();
console.log(`Reverse array: ${arrayRollNumbers}`);
console.log("======================================================");

arrayRollNumbers.sort();
console.log(`Without any custom sorting method : ${arrayRollNumbers}`);

console.log("========================================================");

arrayRollNumbers.sort((a,b)=>{
return a>b ? 1:-1;
});
console.log(`Ascending the array :  ${arrayRollNumbers}`);
console.log("=======================================================");

const arrayRollNumbers1 = arrayRollNumbers.sort((a,b) => {
return a = b 
});

console.log(`The Greater number in the array is : ${arrayRollNumbers1[arrayRollNumbers1.length-1]}`);
console.log("============================================================");
console.log(`Small number in the array : ${arrayRollNumbers1[0]}`);
console.log("============================================================");

const arrayRollNumbers2 = [...new Set(arrayRollNumbers)];
console.log(`Removed Duplicate Numbers : ${arrayRollNumbers2}`);

