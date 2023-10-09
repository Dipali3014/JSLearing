
let professor = {
    name: "Dr.Reshma",
    age: 38,
    city: "Kolhapur",
    joblocation: "Kolhapur",
    isMarried: true,
     degrees:{
        engineering:"CSC",
        PHD:"Adv computing",
    },
    certificates:["Hacker Rank" , "Participation" , "Certificate in IFE course" , "Certificate in Adv Programming"]
}
console.log("================Type of=============================================");
console.log(typeof professor);
console.log("==================Object========================================");
console.log(professor);
console.log("=================Degrees==============================================");
console.log(professor.degrees);
console.log("==================Update Value====================================================");
console.log( `include Array with certificates in an object:  "${professor.certificates}"`);
professor.totalExperience="14 Years";
console.log("=================Add new property===============================================");
console.log (`Add new property in an object:  ${professor.totalExperience}`);

console.log("=============Modify object =====================================");
 professor.name= "Dr.Reshma Waghmare",
  console.log(`Modify the name with surname:  "${professor.name}"`);

console.log("===============Add one new certificate====================================================");

professor.certificates.push ("Oracal certified");
console.log(professor.certificates);
console.log("===================Last element in array===============================================");
console.log(`The last element of array certificates is:   "${professor.certificates[professor.certificates.length-1]}"`    
    );
    console.log("==================object==========================================================");
    console.log(professor);
    console.log(professor.degrees);
    console.log(professor.degrees.certificates);
    console.log("=================Traverse array=========================================");
    for (const course of professor.certificates) {
        console.log(course);
    }