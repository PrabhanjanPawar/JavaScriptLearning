

console.log(`1) -----Arrow function with, No argument no Return value\n`);

let arrowFunction = () => {
        console.log(`"Good Morning, Today is Monday"`);
}
arrowFunction();
// let array = function(){
//     console.log(`"Good Morning, Today is Monday"`);
// }
// array();
console.log(`\n2) -----Arrow function with, 3 argument and no Return value, to perform Multiplication with default argument\n`);

let arrowFunctionMulti = (num1, num2, num3=1) => {          //num3=1 is default argument to the function

    console.log(`The Multiplication of given no. is : `,num1*num2*num3);
}
arrowFunctionMulti(5,5,2);
arrowFunctionMulti(10,4);           //default value passed

console.log(`\n3) -----Arrow function with, 5 argument with Return value, to perform Addition \n`);
let arrowFunctionAdd = (value1,value2,value3,value4,value5) => {
    let addResult = value1+value2+value3+value4+value5; 
    return addResult;
}
let addResult = arrowFunctionAdd(100, 100, 200, 349, 756);
let addResult1 = arrowFunctionAdd("I am","learning","ES^","features","in depth");
console.log(`The Addition of given Number is : "${addResult}" \nThe Addition of given Value is  : "${addResult1}"`);

