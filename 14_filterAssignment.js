


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
const emp_prabhu = new Employee(404, "Prabhu", "Finance", 45000, "Infy");
const emp_rahul = new Employee(505, "Rahul", "IT", 40000, "Wipro");
const emp_vinayak = new Employee(606, "Vinayak", "IT", 75000, "TCS");
const emp_mahesh = new Employee(707, "Mahesh", "HR", 85000, "Infy");

const employeeArray = [emp_akash, emp_rohit, emp_monika, emp_prabhu, emp_rahul, emp_vinayak, emp_mahesh];

// employeeArray.filter((elementOfEmployeeArray) => {
//             if (elementOfEmployeeArray.emp_company=="TCS") {
//                 console.log(`Employee Name : "${elementOfEmployeeArray.emp_name}" And Company Name : "${elementOfEmployeeArray.emp_company}"`);
//             }
// });
console.log(`----- Assignment using Filter -----`);
const newArray = employeeArray.filter((value) => {
            if (value.emp_company=="TCS") {
                //console.log(`Employee Name : "${value.emp_name}" And Company Name : "${value.emp_company}"`);
                console.log(value.emp_name ,",",value.emp_company);
               //return value.emp_company, value.emp_name;
            }
});

const resultArray = employeeArray.filter( (currentValue) => {
                   return currentValue.emp_company == "TCS";
});
console.log(resultArray);

