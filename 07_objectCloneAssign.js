console.log(`"This is Object Clone Assignment"`);

const arrayNums=[20, 3, 4, 56, 90, 400, 49];
let myShallowArray=arrayNums;
console.log(`Original Array : `,arrayNums);
console.log(`Cloned Array : `,myShallowArray=arrayNums);
myShallowArray.push(55,66);
console.log(`1)----- Shallow Cloned Array after push-55 & 66`);
console.log(myShallowArray);

let myDeepCloneArray=[...arrayNums]
//console.log(myDeepCloneArray);
myDeepCloneArray.push(10,25);
console.log(`Original Array : `,arrayNums);
console.log(`2)----- Deep Clone Using ...spread Operator with push Method : `);
console.log(myDeepCloneArray);

const arrayEven = [2, 30, 14, 8];

let mergeArray = [...arrayEven, ...arrayNums];
console.log(`3)----- Merge 2 Arrays Using ...spread Operator : `);
console.log(mergeArray);

const employee_info={
    emp_id : 27,
    emp_name : "John Deo",
    salary:{
        july_month : "40,000INR",
        aug_month : "50,000INR",
        jun_month : "65,000INR"
    },
    address : {
        locality : {
            colony : "Om Vrindavan Society",
            street : "kanch Pokali, 413202",
        },
        City : "Mumbai",
        State : "Maharashtra",
        Country : "India",
    },   
    mobiles : ["+91 8600 3456 88", "1800-4567 32", "+91- 9096 5687 77"]
}
console.log(`4)----- Employee Information Object`);
console.log(employee_info);
//console.log(`Address :`,employee_info.address);
//console.log(`5)----- Employee Address`);
console.log(`5 : A)-----The Address of Employee "${employee_info.emp_name}" is : \n 
Colony : ${employee_info.address.locality.colony}\nStreet : ${employee_info.address.locality.street}
City : ${employee_info.address.City}, State : ${employee_info.address.State}, Country : ${employee_info.address.Country}\n`);

console.log(`5 : B)-----The Mobile Numbers of Employee "${employee_info.emp_name}" are : ${employee_info.mobiles}\n`);

console.log(`6)-----"Deep Cloning using JSON.stringify"-----`);
let deepCloneJson=JSON.parse(JSON.stringify(employee_info));
console.log(deepCloneJson);
deepCloneJson.salary.july_month="80,000INR";
console.log(`6 : A) Updated Salary of July month from "40,000INR" to "80,000INR" using JSON.stringfy : ${deepCloneJson.salary.july_month}`);
employee_info.address.Country="United Kingdom";
//console.log(employee_info.address.Country);
console.log(`6 : B) Updated Country from "India" to "United Kingdom" in Original object : ${employee_info.address.Country}`);
console.log(`6 : C) Updated values for Original & Cloned Objects -----\n`);
console.log(employee_info.emp_name, employee_info.emp_id);
console.log(employee_info.salary);
console.log(employee_info.address);
console.log(employee_info.mobiles);

console.log(deepCloneJson.emp_name, deepCloneJson.emp_id);
console.log(deepCloneJson.salary);
console.log(deepCloneJson.address);
console.log(deepCloneJson.mobiles);
