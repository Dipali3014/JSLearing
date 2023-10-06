var str = "I AM Learning Javascript, Language of internet";
var count = 0;
var vowelsCap = "aA";

for (let index = 0; index < str.length - 1; index++) {
  var char = str.charAt(index).toUpperCase();
  if (vowelsCap.includes(char)) {
    count = count + 1;
  }
}
console.log(
  ` Given string is: "I AM Learning Javascript, Language of internet"`
);
console.log(` Total number of character of "A" , "a" is: ${count}`);
console.log("==========================================================");
var str1 = "My favourite movie is LAggAn";
var count = 0;
var vowelsCap = "aA";

for (let index = 0; index < str1.length - 1; index++) {
  var char = str1.charAt(index).toUpperCase();
  if (vowelsCap.includes(char)) {
    count = count + 1;
  }
}
console.log(` Given string is: "My favourite movie is LAggAn"`);
console.log(` Total number of character of "A" , "a" is: ${count}`);
