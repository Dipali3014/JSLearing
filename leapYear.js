

var checkLeapYear = function (year) {
    var result = +year;
 if (year % 100===0|| year % 400===0 || year % 4 ===0 ){
     console.log(`This is leap year: ${year}`);
 
 
} else {
 if (year>1600) {
     console.log(`This not leap year: ${year}`);
 } else {
     console.log(`This is invalid data: ${year}`);
 }
     
 }
}
checkLeapYear(2020);
console.log("--------------------------------------------");
checkLeapYear(1999);
console.log("--------------------------------------------");

checkLeapYear(1600);
console.log("--------------------------------------------");

checkLeapYear(2022);
console.log("--------------------------------------------");

checkLeapYear(1945);
console.log("--------------------------------------------");

checkLeapYear(null);
console.log("--------------------------------------------");

checkLeapYear("Twenty Twenty");
console.log("--------------------------------------------");

checkLeapYear(undefined);
console.log("--------------------------------------------");

checkLeapYear(NaN);
console.log("--------------------------------------------");

checkLeapYear(2020);
console.log("--------------------------------------------");

checkLeapYear(1750)
console.log("--------------------------------------------");


