

const personalDetails = {
    name: "Dipali",
    city: "Mhaswad",
    mobileNo: 7839349232,
    education: "B.C.A",
}
console.log(personalDetails);
const collegeDetails = {
    collegeName:"Gov.Engineering",
    city: "Sangli",
    university:"Shivaji",
    department:"7",
}
console.log(collegeDetails);
Object.assign(personalDetails,collegeDetails)
console.log("=========================merge two object=======================");
console.table(personalDetails);

const friendName = {
    friend1: "Elone",
    friend2: "Deny", 
    friend3: "Weny",
    friend4: "Rony", 
    friend5: "Randy",
}
console.log("=============================freeze================================");
Object.freeze(friendName)
console.log(friendName);
console.log("=============================Array= with for loop================================");
let friendN = ["Deny", "Weny","Rony","Randy",]
for (const course of friendN) {
    console.log(course);
}
console.log("========================Given  a string Company===============================");

const company = "Codemind Technology";
let reverse =  " ";
for (let index = company.length-1; index >=0;index--) {
    let char = company.charAt(index);
    if(char == " ")
    {
        break;

    }
    else{
        reverse = reverse + char;
        
    }
    
}

console.log(reverse); 

    

    


