
const personalDetails = {
    myName: "Prabhanjan Pawar",
    mobNo: 9503850345,
    address: "Pune",
    pin: 411061
}
console.log(`Personal Details:` ,personalDetails);
const collegeDetails = {
    collegeName :"Zeal College",
    location: "Pune",
    pin: 411016
}
console.log(`College Details:` ,collegeDetails);
console.log(`--------------Merge the two objects----------------------`);

const mergeObject=Object.assign(personalDetails,collegeDetails)
console.log(mergeObject);
console.log("-------------Create an Array of Friends Name And Freeze it------------");
const frdName =["Sushant","Rohit","Sumeet"];
console.log(`Friend names by using array:`, frdName);
Object.freeze(frdName)
//frdName.push("Prabhanjan");  // can not do any changes after using Freez Method;
for (const  iterator of frdName) {
    console.log(iterator);
}

var myString="Codemind Technology";
var reverseString="";
for (let index = myString.length-1; index >=9; index--) {
    var myString1 = myString.charAt(index);
    reverseString=reverseString+myString1; 
}
var newString= "Codemind";
var concatString=newString+ " " +reverseString;
console.log("--------------Reverse String : Technology--------------");
console.log(`Resulted String  of Codemind Technology is : "${concatString}"`);