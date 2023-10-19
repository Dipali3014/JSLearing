class Employee{
constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
}
}

    const emp_Anil = new Employee(22, "Anil" , "IT" ,50000 , "TCS" );
    const emp_Radha = new Employee(33, "Radha" , "HR" , 74000 , "Wipro" );
    const emp_Rashi = new Employee(55, "Rashi" , "Finance" , 47000, "TCS" );
    const emp_Sonali = new Employee(66, "Sonali" , "Finance", 45000, "Infy");
    const emp_Monika = new Employee(77, "Monika" , "IT" , 40000, "Wipro");
    const emp_Viny = new Employee(88, "Vinayak" , "IT" , 75000 , "TCS" );
    const emp_Mahi = new Employee(99, "Mahesh" , "HR" , 85000 , "Infy");
console.log("======================= Work in TSC company ===============================================");
    const arrayPerson = [emp_Anil,emp_Rashi,emp_Viny];
    arrayPerson.forEach((Employee) => {
        if (Employee.emp_company == "TSC") {
        }
        console.log(`Name of employee is : "${Employee.emp_name}"  ==   The Company name is:"${Employee.emp_company}"`);
        });

console.log("============================= Finance Department    =======================================================");
    const arrayPerson1 = [emp_Sonali,emp_Rashi,];
    arrayPerson1.forEach((Employee) => {
        if (Employee.emp_dept == "Finance") {
            }
        console.log(`Name of employee is :"${Employee.emp_name}"  == The name of department is :${Employee.emp_dept}`);
    }
    );
    console.log("===========================  Name start with R  ============================================================");

    const arrayPerson2 = [emp_Rashi,emp_Radha,];
    arrayPerson2.forEach((Employee) => {
        if(Employee.emp_name.startsWith('R'))  {

        } 
            
        console.log(`Name of first letter start with R :${Employee.emp_name} `);
    }
  );
    console.log("=============================  Salary Greater then 75000   ========================================================");
const arrayPerson3 = [emp_Mahi,emp_Viny]
arrayPerson3.forEach((Employee) => {
    if (Employee.emp_salary<=75000) {
    }  
    console.log(`Name: ${Employee.emp_name},  Salary: ${Employee.emp_salary},  Company name is: ${Employee.emp_company}`  );
    }
);

console.log("================== Salary is greater than and equal to 50000 in IT Department  ======================================================");

const arrayPerson4 = [emp_Viny,emp_Mahi,emp_Radha,emp_Anil];
arrayPerson4.forEach((Employee) => {
    if (Employee.emp_salary>=50000 && Employee.emp_dept== "IT") {
        
    }
    console.log(`Employee Id :${Employee.emp_id} Name :${Employee.emp_name}, Department :${Employee.emp_dept}, Salary :${Employee.emp_salary}, Company name :${Employee.emp_company}`);
}

);

console.log("================================ Work in INFY company =======================================================");


const arrayPerson5 = [emp_Mahi,emp_Sonali,];
arrayPerson5.forEach((Employee) =>{
    if (Employee.emp_company == "Infy"){

    }
    console.log(`Employee Id :${Employee.emp_id} Name :${Employee.emp_name}, Department :${Employee.emp_dept}, Salary :${Employee.emp_salary}, Company name :${Employee.emp_company}`);
}

);


     



