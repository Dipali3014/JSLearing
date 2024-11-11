 console.log("===================== Steps 1  ========================================");
 const arrayNum = [11,3,4,11,4,7,3];
 console.log(`Main numbers in array : ${arrayNum}`);
  let setNum = new Set(arrayNum);
  console.log(`Without duplicate number in given array is`);
  console.log(setNum);

  console.log("======================== Step 2   ====================================");
  
  



  let str = "How are you mate";
  console.log(`Given String is : ${str}`);
const words = str.split(" ");
console.log(words);
 const str1 = ['How', 'are', 'you', 'mate'];
 for (let index = 0; index < str1.length; index++) {
    str1[index] = str1[index].toUpperCase(str1.length-1);
    
 }
 console.log(str1);


const string = "How are you mate";

 function Capitalize(string) {
    var word= string.split(" "); 
    var words = [];
    for (let i = 0; i < word.length; i++) {
      //For every word
      for (let j = 0; j < word[i].length; j++) {
        //For every letter in each word
        var str= word[i];
        var str1 = word[i].length;
        var firsCap = str.replace(str[0], str[0].toUpperCase()); //Creates new array
        var LastCap = firsCap.replace(
          str[str1 - 1],
          str[str1 - 1].toUpperCase()
        );
      }
      word.push(LastCap);
    }
    console.log(words.join(" "));
  }
  
  console.log(LastCap);



  const str = "How are you mate"; // "HoW ArE YoU MatE"
const arrayWord = str.split(' ');
let finalStr = '';
for (const word of arrayWord) {
    let firstChar = word.charAt(0).toUpperCase();
    let lastChar = word.charAt(word.length-1).toUpperCase();
    // Replace word,  first char by firstChar
    // Replace word,  last char by lastChar
    finalStr = finalStr + word;
    console.log(word, firstChar, lastChar );
}
console.log(finalStr);
