


class Employee{

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
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahesh];
console.log(`\n 1) ------Sorting array in ascending order by employee id `);
array_employees.sort( (element1, element2) => {
       return element1.emp_id > element2.emp_id ? 1 : -1;
});

array_employees.forEach( (currentValue) => { 
        console.log(currentValue.emp_id, currentValue.emp_name, currentValue.emp_dept);
});

console.log(`\n 2) ------Sorting array in ascending order by employee department `);

array_employees.sort( (element1, element2) => {
        return element1.emp_dept > element2.emp_dept ? 1 : -1;
});

array_employees.forEach( (currentValue) => {
    console.log(currentValue.emp_id, currentValue.emp_dept, currentValue.emp_company);
});

console.log(`\n 3) ------Sorting array in descending order by employee salary `);
array_employees.sort( (element1, element2) => {
        return element1.emp_salary < element2.emp_salary ? 1 : -1;
});

array_employees.forEach( (currentValue) => {
    console.log(currentValue.emp_name, currentValue.emp_salary, currentValue.emp_company);
});