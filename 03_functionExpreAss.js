var square = function (value1) {
  return value1 * value1;
};
var result = square(5);
console.log(`square of is:5 =  "${result}"`);
var result = square(6);
console.log(`square of is:6 =  "${result}"`);
var result = square(25);
console.log(`square of is:25 =  "${result}"`);
var result = square(67.89);
console.log(`square of is:67.89 =  "${result}"`);
var result = square(69);
console.log(`square of is:69 =  "${result}"`);
console.log(
  "----------------------------Steps 2:--------------------------------------------"
);
var multiple = function (num1, num2) {
  return num1 * num2;
};
var result = 499 * 917;
console.log(
  `The area of plot length "499" and width "917" is Total area of plot is: "${result}"`
);
console.log(
  "------------------------ Step 3-------------------------------------------------"
);
console.log("Type of Square is:", typeof square);

console.log(
  "-----------------------------Steps 4:----------------------------------------------------"
);

var swapValue = function (valueOne, valueTwo) {
  // function declaration
  console.log(`Before swap ==>${valueOne} ${valueTwo}`);
  var temp = valueOne;
  valueOne = valueTwo;
  valueTwo = temp;
  console.log(`After swap ==> ${valueOne} ${valueTwo}`);
};
swapValue("Mahi", "Raina");
swapValue("55", "77");
console.log(
  "-----------------------Step 5--------------------------------------------------------"
);

var str = function () {
  str = "JS is most popular language of internet";
};
str();
var total = str.length;
console.log(`The total character available in the string:${total}`);
var indexOf6 = str.indexOf("6");
console.log(`Index of 6 is: ${indexOf6}`);
var indexOf11 = str.indexOf("11");
console.log(`Index of 11 is: ${indexOf11}`);
var lastIndexChar = str.charAt(str.length - 1);
console.log(`Last index character of string is: ${lastIndexChar}`);
var charAt0 = str.charAt(0);
console.log(`The very first character of string is: ${charAt0}`);
var thirdIndexChar = str.charAt(str.length - 3);
console.log(`Last index character of string is: ${thirdIndexChar}`);
var words = str.split(" ");
var squareNum = square(7);
console.log(
  `JS is most popular language of internet string of word is: "${words.length}" and The square of the words is: "${squareNum}"`
);
