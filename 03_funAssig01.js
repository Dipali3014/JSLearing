console.log("===========Function with no arguments and no return type====");
  function information(){
    console.log("Hello World");
    console.log('Start a Journey with JavaScript');
}
  information();


  console.log("2.=====================PersonalDetails=====================");
  function personalDetails() {
    console.log("Name:-Dipali ");
    console.log("Last Name:- Waghmre");
    console.log("Collage Name:- Fortune Institute Of Computer Science");
    
  }
  personalDetails();


  console.log("3.================Function with argument and no ret===============");
  console.log("================================Swap==============================");
  function swapValues(valueOne,valueTwo) {
    console.log("Before swap===>", valueOne,valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log("After swap==>",valueOne,valueTwo);
  }
  swapValues(10,20);

  console.log("=================3.2======================");
  swapValues("Virat","Anushka");
  console.log("==================3.3===========================");
  swapValues("1000","2000");

  console.log("====================Additional Function===============================");



   function addThreeValues(arg1,arg2,arg3) {
    console.log(arg1+arg2+arg3);
     
   }
  
   addThreeValues ( "Addition of three values:",10.23+600+40);
   addThreeValues("Addition of three words: Hello" , " Good " ,  " Morning ");




 
 

  
