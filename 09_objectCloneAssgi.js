
console.log(`Merging an objects`);

const bankSbi = {
    name: "State Bank Of India",
    branch: "Satara",
    email_Id: "sbi.in.com",
    Toll_free: 1800112211,
    branch_no: 56738,
    
}

 let bankLocation = {
    street: "Ap/Mhaswad,Tal=Man,Dist=Satara",
    city: "Mhaswad",
    pin: 415509,
 }

 Object.assign(bankSbi, bankLocation);
 console.log("===================Step 1=============================");
console.log(bankSbi);
console.log("====================Step 2=============================");
console.log(bankLocation);
console.log("====================Step 3=============================");
let rateOfInterest = {
    homeLoanInterst: "10%",
    personalLoanInterst: "12%",
    dueInterst: "9%",
}
Object.assign(rateOfInterest);
console.log(rateOfInterest);
Object.assign(bankSbi,bankLocation,rateOfInterest);
console.log("====================Step 4===============================");
console.table(bankSbi);
console.log("====================Step 5===============================");
console.log("==============Traverse this merged object================");
for (let [key, value] of Object.entries(bankSbi)) {
    console.log(`${key}: ${value}`);}