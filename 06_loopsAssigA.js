 var str = "I am very good IT Developer";
var count = 0;
var vowelsCap = "AEIOU";
var vowelsCapLower = "aeiou";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(vowelsCap.includes(char) || vowelsCapLower.includes(char)){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);

var result = 0;
for (let index = 1; index <=5; index++) {
    result = result + index * index * index;
    
}
console.log(`Sum of cube is:${result}`);

function oddPositionedChars(arg) {
    for (let index = 0; index < arg.length-1 ; index++) {
        if (index%2!=0 && arg.charAt(index)!= " ") {
            console.log(arg.charAt(index));
            
        }
        
    }
    
}
console.log("Given string Odd Positioned Chars is==>");
oddPositionedChars("Hard work always pays back");
console.log("Given string Odd Positioned Chars is==>" );
oddPositionedChars("Soon a will be UI IT champ");