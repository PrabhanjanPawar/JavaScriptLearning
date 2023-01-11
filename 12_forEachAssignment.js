


class Employee{

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_akash = new Employee(101, "Akash", "IT", 50000, "TCS");
const emp_rohit = new Employee(202, "Rohit", "HR", 74000, "Wipro");
const emp_monika = new Employee(303, "Monika", "Finance", 47000, "TCS");
const emp_prabhu = new Employee(404, "Prahanjan", "Finance", 45000, "Infy");
const emp_rahul = new Employee(505, "Rahul", "IT", 40000, "Wipro");
const emp_vinayak = new Employee(606, "Vinayak", "IT", 75000, "TCS");
const emp_mahesh = new Employee(707, "Mahesh", "HR", 85000, "Infy");

const empArray = [emp_akash, emp_rohit, emp_monika, emp_prabhu, emp_rahul, emp_vinayak, emp_mahesh];

console.log(` 1) ----- Find out TCS employee details`);
empArray.forEach((employee) => {                // empArray.forEach((currentValue) => {
        if (employee.emp_company=="TCS") {
             console.log(`Name of Employee is : "${employee.emp_name}" and Company Name is : "${employee.emp_company}"`);
        }
});

console.log(` \n2) ----- Find Employee with Salary Greater than or equal to 50000`);
empArray.forEach((employee) => {
        if (employee.emp_salary >= 50000) {
            //console.log(employee);
            console.log(employee.emp_id, employee.emp_name, employee.emp_dept, employee.emp_salary, employee.emp_company);
        }
});

console.log(` \n3) ----- Find Sum of all Employees Salary `);
var empSalSum = 0;
empArray.forEach((employee) => {
        if (employee.emp_salary > 0) {
            empSalSum = empSalSum + employee.emp_salary;
         }   
});
console.log(`   Sum of all employees Salary is : ${empSalSum}`);

console.log(` \n4) ----- Find Average Salary of all Employees `);
let empLength = empArray.length;
console.log(`   Average salary for employee is : ${empSalSum/empLength}`);


console.log(` \n5) ----- Find the "IT" OR "HR" department employees, whose salary >=75000`);
empArray.forEach((employee) => {
        if ((employee.emp_dept=="IT" || employee.emp_dept=="HR") && employee.emp_salary >= 75000) {
            console.log(employee);
        }
});