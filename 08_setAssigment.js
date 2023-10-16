

class Bank {
    bankName
    location
    account
    ifsc
    interestRate;

constructor (bankName, location,  account, ifsc, interestRate){
    this.bankName = bankName;
    this.location = location;
    this.account = account;
    this.ifsc = ifsc;
    this.interestRate = interestRate;
}

 details(){
    console.log(`Bank information :-${this.bankName}, ${this.location}, ${this.account}, ${this.ifsc}, ${this.interestRate}`);
 }

}
 const banks = new Bank();
 console.log(`Type of Given Banks is : ${typeof banks}`);
 
 console.log("=========Create Given Banks in Class with Data Members as such as all properties using in constructor =====");
 
 const bankName1 = new Bank("Axis Bank",'Pune',4846565356356,1422,'10%');
 console.log(bankName1);

 const bankName2 = new Bank("SBI Bank", "Mumbai", 3343434343, 3456, '11%');
 console.log(bankName2);

 const bankName3 = new Bank("ICICi Bank", 'Kolhapur', 5668877899,234556, '9%');
 console.log(bankName3);

 const bankName4 = new Bank('Kotak Bank', "Sangli", 7644566780, 235566, "11%");
 console.log(bankName4);

 const bankName5 = new Bank("HDFC Bank", "Satara", 345662677738, 56788, "10%");
 console.log(bankName5);

 const bankName6 = new Bank("Panjab Bank", "Pune", 4566789970, 5678, "11%");
 console.log(bankName6);

 console.log("============= Add all object elements in a set and Traverse  =====================");

 const bName = new Set();
 bName.add("Bank Name= Axis Bank, Location= Pune" );
 bName.add("Bank Name= SBI Bank, Location = Mumbai");
 bName.add("Bank Name= ICICI Bank, Location = Kolhapur");
 bName.add("Bank Name= KOtak Bank, Location = Sangli");
 bName.add("Bank Name= HDFC Bank, Location = Satara");
 bName.add("Bank Name= Panjab Bank, Location = Pune");
 for (const element of bName) {
    console.log(element);
    
 }











