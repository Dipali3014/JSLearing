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
  function addition(  valueOne ,valueTwo ,valueThree) {
    var valueOne = 10.23;
    var valueTwo = 600;
    var valueThree = 40;
    var result = valueOne+valueTwo+valueThree;
    return result;
  }
  var addThreeValues = addition(10.23+600+40);
  console.log("Addition of three values:" ,addThreeValues);

  console.log("4.3====================Good Morning====================================")
  function add( x,y,z) {
    var x = "Hello";
    var y = "Good";
    var z = "Morning";
    var result = x+y+z ;
    return result;
  }
   var addThreeWord = add("Hello",+"Good",+"Morning");
   console.log("Addition of three words:", addThreeWord);

 


 


    

