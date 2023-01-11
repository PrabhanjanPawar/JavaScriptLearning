


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

let map_employees = new Map();
map_employees.set(101, emp_akash);
map_employees.set(202, emp_rohit);
map_employees.set(303, emp_monika);
map_employees.set(404, emp_prabhu);
map_employees.set(505, emp_rahul);
map_employees.set(606, emp_vinayak);
map_employees.set(707, emp_mahesh);

employeeArray.forEach((employee) => {
            //console.log(`${employee.emp_id} ===> Employee ${employee}`);
            //console.log(employee.emp_id,"===>", employee);
            console.log(employee.emp_id, "===>", "Name:",employee.emp_name, "   Dept : ",employee.emp_dept, "   Salary : ", employee.emp_salary, "  Compny : ", employee.emp_company);

});