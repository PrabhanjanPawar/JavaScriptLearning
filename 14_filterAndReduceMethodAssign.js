


class Employee{

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_akash = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_rohit = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_monika = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_prabhu = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_rahul = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_emps = [emp_akash, emp_rohit, emp_monika, emp_prabhu, emp_rahul, emp_vinayak, emp_mahesh];
console.log(` 1) ----- Find all Employees from "Wipro"`);
array_emps.filter( (element) => {
        if (element.emp_company=="Wipro") {
            console.log(element);
        }
});

console.log(` 2) ----- Find all Employees from "IT" and "HR" Dept`);

array_emps.filter((department) => {
        if (department.emp_dept == "HR" || department.emp_dept == "IT") {
            console.log(department);
        }
});

console.log(` 3) ----- Find all Employees whose emp_id > 50`);

array_emps.filter((employeeId) => {
            if (employeeId.emp_id > 50) {
                console.log(employeeId);
            }
});

console.log(` 4) ----- Find all Employees whose Name start with "A", "V", "M"`);

array_emps.filter( (nameStart) => {
            if (nameStart.emp_name.startsWith("A") || nameStart.emp_name.startsWith("V") || nameStart.emp_name.startsWith("M")) {
                console.log(nameStart);
            }
});

console.log(` 5) ----- Find Average salary of all Employees `);
// var sumOfSal = 0;
// //const lengthofArray = array_emps.length;
// array_emps.filter( (averageSal) => { 
//             if (averageSal.emp_salary > 0) {
//                 sumOfSal = sumOfSal + averageSal.emp_salary;
//             }
// });
// console.log(`     Average salary of all employees is : ${sumOfSal/array_emps.length}`);

const sumOfSalary = array_emps.filter( (currentValue) => {
              return currentValue = currentValue + currentValue.emp_salary;
}); 
const average = sumOfSalary.reduce( (runningTotal, value) => {
            return runningTotal + value.emp_salary;
}, 0 );
//console.log(average/sumOfSalary.length);
console.log(`     Average salary of all employees is : ${average/sumOfSalary.length}`);

console.log(`   \n6) ----- Find the Average salary of "IT" Employees `);

const arrayIt = array_emps.filter( (currentValue) => {  
       return currentValue.emp_dept == "IT";

});

const ItSalary = arrayIt.reduce( (runningTotal, value) => {
         return runningTotal + value.emp_salary;
}, 0);
console.log(`   Average salary of IT dept is : ${ItSalary/arrayIt.length}`);
//console.log(ItSalary);