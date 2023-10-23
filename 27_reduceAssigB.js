class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];

const empWipro = arrayEmployees.filter((employee)=>{
return employee.emp_company == "Wipro"
}).map((employee)=>{
return employee.emp_name
})

console.log(`The employee of Wipro company is :   ${empWipro}`);

console.log("==============================================================");

const empDepartment = arrayEmployees.filter((employee)=>{
return employee.emp_dept == "IT" || employee.emp_dept == "HR"
}).map((employee)=>{
return employee.emp_name
})
console.log(`The department of IT and HR Employee Name is : ${empDepartment}`);
console.log("================================================================");

const empGreater = arrayEmployees.filter((employee)=>{
return employee.emp_id > 50
}).map((employee)=>{
return employee.emp_name
})
console.log(`The employee Id is greater then 50 is : ${empGreater}`);
  console.log("===============================================================");

  const empStart = arrayEmployees.filter((employee)=>{
return employee.emp_name.startsWith('A') ||employee.emp_name.startsWith('V') ||employee.emp_name.startsWith('M')
  })
 empStart.forEach((employee)=>{
    if(employee.emp_name.startsWith('A') ||employee.emp_name.startsWith('V') ||employee.emp_name.startsWith('M') )  {

    } 
    console.log(`Name Start With : ${employee.emp_name}`);
  });
 
  console.log("================================================================");

  const empAverage = arrayEmployees.filter((employee)=>{
   return employee.emp_dept
  }).map((employee)=>{
return employee.emp_salary
  })

  function avg(empAverage) {
    var sum = 0;
 
    empAverage.forEach(function (item, idx) {
      sum += item;
    });
 
    return sum / empAverage.length;
  }
 
  console.log(`The average salary of Wipro Employee: ${avg(empAverage)}`);

  console.log("======================================================================");

  const empId = arrayEmployees.filter((employee)=>{
    return employee.emp_dept=="IT"
   }).map((employee)=>{
 return employee.emp_salary
   })
   
   function avg(empId) {
    var sum = 0;
 
    empId.forEach(function (item, idx) {
      sum += item;
    });
 
    return sum / empId.length;
  }
 
  console.log(`The average salary of IT Employee: ${avg(empId)}`);

 