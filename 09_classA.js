
class Vehicle {
    //property
    carName
    modelColor
    sitter
    oil
    price

    constructor(carName,modelColor,sitter,oil,price){
        this.carName = carName;
        this.modelColor = modelColor;
        this.sitter = sitter;
        this.oil = oil;
        this.price = price;
}
details(){
    console.log(`Details : ${this.carName},${this.modelColor},${this.sitter},${this.oil},${this.price}`);
}

}
const vehicleNexo = new Vehicle("Tata Nexo" , "Blue" , "4" , "Diesel" , "15.50lakh" );
vehicleNexo1 = ["CarName-Tata Nexo" ,
 "Model Color==Blue" , "Sitter==4" ,  "Type of oil==Diesel" , "Price==15.50lakh"];
console.log(`Vechicle No1 : ${vehicleNexo1}`);

const vehicleThar = new Vehicle("Mahindra Thar" , "Red" , "4" , "Diesel" , "16.98lakh");
vehicleThar2 = ["CarName-Mahindra Thar" , "Model Color==Red" , "Sitter==4" , "Type of oil==Diesel" , "Price==16.98lakh"]
console.log(`Vechicle No2: ${vehicleThar2}`);

const vehiclePunch = new Vehicle("Tata Punch" , "Black" , "4" , "Petrol" , "10lakh");
vehiclePunch3 = ["Car Name==Tata Punch" , "Model Color==Black" , "Sitter==4" , "Type of oil==Petrol" , "Price==10lakh"]
console.log(`Vechicle No3 : ${vehiclePunch3}`);

 const vehiclecreta = new Vehicle("HYundai Creta", "White" , "4" , "Diesel" , "10.45lakh" );
 vehiclecreta4 = ["Car Name==HYundai Creta", "Model Color==White" , "Sitter==4" , "Type of oil==Diesel" , "Price==10.45lakh" ]
 console.log(`Vechicle No4 : ${vehiclecreta4}`);

 const vehicleertiga = new Vehicle("Ertiga", "Black" , "4" , "petrol" , "13.08lakh" );
 vehicleertiga5 = ["Car Name==Ertiga", "Model Color==Black" , "Sitter==4" , "Type of oil==petrol" , "Price==13.08lakh" ]
 console.log(`Vechicle 5 : ${vehicleertiga5}`);
console.log("==============================Steps 2========================================================");
 class College{
    collegeName
    city
    university
    DepartmentNo
    constructor (collegeName,city,university,DepartmentNo){
        this.collegeName = collegeName;
        this.city = city;
        this.university = university;
        this.DepartmentNo = DepartmentNo;

    };
    display(){
        console.log(`Display ${this.collegeName},${this.city},${this.university},${this.DepartmentNo}`);
    }
}
    let college1 = ["College Name= D.Y.Patil", "City= Sangli", "University = Mumbai", "Department=5"];
    console.log(`College1 ${college1}`);

    let college2 = ["College Name = Bharti Vidyapeeth,Kadegaon", " City = Kadegaon", "University = Shivaji", "Department=6"];
    console.log(`College2 ${college2}`);

    let college3 = ["College Name = Goverment Medical College,Miraj", " City = Miraj", "University = Nashik", "Department=7"];
    console.log(`College3 ${college3}`);

    let college4 = ["College Name = Gov.Engineering", " City = Sangli", "University = Shivaji", "Department=7"];
    console.log(`College4 ${college4}`);
console.log("=============================Step 3==============================================");
    function traverseObject(all) {
        for (const course of college1) {
            console.log(course);
        }
        
    }
    traverseObject(college1);
    console.log("---------------------------------------------------------------------------------");
    traverseObject(college2);
    console.log("---------------------------------------------------------------------------------");
    traverseObject(college3);
    console.log("----------------------------------------------------------------------------------");
    traverseObject(college4);
    console.log("---------------------------------------------------------------------------------");

   




 



