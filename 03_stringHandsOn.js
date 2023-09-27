function stringHandsOn() {
    
}
var str= "   Hey you are doing good,keep it up    "
console.log("1----------------------------------------------------------");
console.log(`"   Hey you are doing good,keep it up    "`);
console.log("2-------------------------------------------------------");
var totalLength = str.length;
console.log(`Total length of:      ${totalLength}`);
console.log("3------------------------------------------------------------");

var lengthBeforeTrim = str.length;
console.log("Length before trim : ",    str.length);
console.log("4---------------------------------------------------------------------");
var result = str.trim();
console.log("Length after trim: ",     result.length);
var lengthAfterTrim = result.length;
console.log("5----------------------------------------------------------------------");
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are: ',     result);

console.log("6-------------------------------------------------------------------------------");



var str1 = "Hey you are doing good, keep it up";


var charAt0 = str1.charAt(0);
var lastIndexChar = str1.charAt(str1.length-1);
console.log(`Index first character is: "${charAt0}" index of End character is: "${lastIndexChar}"`);



console.log("7------------------------------------------------------------------------------------");
var words = str1.split(" ");
console.log( `After split word are:  ${words}`);
console.log('Total words is: ',     words.length);
console.log("8-----------------------------------------------------------------------------");

var result = str1.search('good');
console.log(`Index of word good is:     ${result}`);
console.log("9------------------------------------------------------------------------");

var result = str1.slice(22);
console.log(`Substring starting  form the index 22 is:  ${result}`);
console.log("10------------------------------------------------------------------------");

var result = str1.includes('up');
console.log("Is up word available: ",   result);
console.log("11--------------------------------------------------------------");
var result = str1.includes('Hey');
console.log("Is Hey word available: ",   result);