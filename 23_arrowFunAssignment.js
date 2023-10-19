
console.log("============================= Assignment A ===========================================");
console.log("================================  Step 1  ================================================");
let greeting  = ( )=>{
    console.log("Good Morning, Today is Wednesday");


}
greeting();
console.log("=================================  Step 2  ===============================================");
let multiplication = (num1,num2,num3) => {
       
       console.log(`The multiplication of : ${num1*num2*num3}`);
}
multiplication(5,5,2);
multiplication(10,4,1);
console.log("==================================  Step 3  ==================================================");
let addition = (add1,add2,add3,add4,add5)=> {
       let result = add1+add2+add3+add4+add5;
       return result;
}
let result = addition(100,100,200,349,756);
console.log(`The addtion of 5 numbers 100,100,200,349,756 : ${result}`);

let result1 = addition("I am ", "learning ", "ES6 ", "features "," in depth");
console.log(`The Given Word is"I am ", "learning ", "ES6 ", "features "," in depth" `) 
console.log(`          ${result1}`);

