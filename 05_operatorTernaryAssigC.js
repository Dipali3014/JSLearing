
console.log("----------------------  Assignment No:1  ------------------------------------------------");
console.log("==================  Male Marriage Eligibility==========================================================");
function maleMarriageEligibility(gender,age,boyName) {
    var result = gender== "Male" && age>=21
    ? `Hey Your age is  "${age}"    "${boyName}"  You are eligible for marriage:  Happy Married Life!`:
    `Sorry, Your age is  "${age}"   "${boyName}"  U r noneligible for marriage :  Try Next time`;
    return result;
    
    
} 
var result = maleMarriageEligibility("Male",25,"Billgates");
console.log(result);


var result = maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(result);


console.log("===================  Female Marriage Eligibility===============================================================");

function femaleMarriageEligibility(gender,age,girlName) {
    var result = gender== "Female" && age>=18
    ? `Hey Your age is  "${age}"  "${girlName}"  You are eligible for marriage:  Happy Married Life!`:
    `Sorry, Your age is "${age}"  "${girlName}"  U r noneligible for marriage :  Try Next time`;
    return result;
    

}
var result = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(result);

var result = femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(result);

console.log("========================================= End ===============================================================");