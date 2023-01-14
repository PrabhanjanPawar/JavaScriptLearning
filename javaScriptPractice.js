console.log("======== concat() ==========");

var firstName = "Mohit ";
var lastName = "Sharma";
// Concatenation using + operator 
var result = firstName + lastName;
console.log("Concatenation using + operator:", result);
var result = firstName.concat(" Ravesh " ,lastName);
console.log("Concatenation using concat(): ", result);


console.log("\n======== indexOf() ==========");
var greet = "Good Morning";
var indexOf = greet.indexOf("M");
console.log("Index of character M: ", indexOf);

var indexOfNin = greet.indexOf("nin");
console.log("Index of substring nin: ", indexOfNin);


console.log("\n======== Replace() ==========");
var greet = "Good Morning";
var greetAfterReplace =  greet.replace("Morning", "Afternoon");
console.log("Replace substring Morning with Afternoon:  ", greetAfterReplace);

console.log( greet.replace("Mor", "Eve"));

console.log("\n======== To upperCase() ==========");

console.log("To upper case  : ", greet.toUpperCase());
console.log("To lower case  : ", greet.toLowerCase());

console.log("\n======== length() ==========");

var greet = "    Good Morning     ";            //it calculate starting(leading) and ending(trailing) spaces also.
 console.log("Length of greet : ", greet.length);

 console.log("\n======== trim() ==========");       //it will remove starting(leading) and ending(trailing) spaces
 var resultTrim = greet.trim();
  //console.log( "String after trim() : ", resultTrim, "Length: ", resultTrim.length);
  console.log(`String before trim : "${greet}" AND Length before Trim is : ${greet.length}`);
  console.log(`String after trim() : "${resultTrim}" AND Length of string is : ${resultTrim.length}`);

  console.log("\n======== includes() ==========");      //it checks that given string or character is present or not/result in true or false
console.log("Include() : ",greet.includes("Good"));

console.log("\n======== slice() ==========");        //it will give you the slice(tukada) from given string
var greet = "Good Morning";
var resultSlice = greet.slice(0, 4);
console.log(`Slice method : "${resultSlice}"`);
console.log( "slice() with start index ",greet.slice(4));

console.log("\n======== split() ==========");       //it will differentiate words,(alag) with the given format inside bracket()
var studList = "Dips|Jenny|Ganni|Manni|Shani";
var studListSplit = studList.split("|");
console.log(" Student list after split by char ,", studListSplit);
console.log("Total number students: ", studListSplit.length);       //it will give you words count

var sentence = "Yes you can do it guys, just keep learning and practising as well";
var wordsInSentence =  sentence.split(" ");
console.log(`Normal string without split is : "${sentence}"`);
console.log("Total words in sentence string is: ", wordsInSentence.length);


console.log("\n======== String template ==========");
console.log(`Yes you can do it "Sanket"  `);

var firstName = "Mohit ";
var lastName = "Sharma";
console.log("First name is: "+ firstName + "Last name is: "+ lastName ); //old method to print anything on consol

console.log(`First name is: ${firstName} and last name is ${lastName}`); //new mwthos using "String Template".

console.log(`==================Operators==================`);

console.log(`============ Comparison Operators =================`);
var num1 = 10;
var num2 = 5;
var num3 = 10
var result = num1 > num2;
console.log(`> Operator - Greater than ${result}`)
console.log(`> Operator - Greater than ${num1>num3}`)

var result = num1 < num2;
console.log(`< Operator - Less than ${result}`)

var result = num1 >= num3;
console.log(`>= Operator - Greater than equal ==> ${result}`)

var result = num1 <= num3;
console.log(`<= Operator - Less than equal ==> ${result}`);

console.log(`Check even or ODD: ${11%2}`);      //% (modulos) gives you the reminder


console.log("\n======== TERNARY OPERATOR ==========");
// If SSC marks greater than equal to 35 then pass or fail
var sscMarks = 34;

var resultPassOrFail= sscMarks>=35 ? "Pass" : "Fail";
console.log(` Your Result is : "${resultPassOrFail}"`);

var resultDivide = 0/0;
console.log(`Result is: ${resultDivide}`);
console.log(`Type of${resultDivide} is ${typeof resultDivide}`);

console.log("\n======== NaN (Not a Number) =========="); //Anything we perform with "NaN" the result is "NaN"
var resultDivide = 0/0;
console.log(`Result is: ${resultDivide}`);
console.log(`Type of : ${resultDivide} is ${typeof resultDivide}`);

var resultAdd = resultDivide + 10;      // NaN + 10 = NaN
console.log(`resultAdd is: ${resultAdd}`);

var resultMul = resultDivide * 10;      //NaN * 10 = NaN
console.log(`resultMul is: ${resultMul}`);

var num = new Number("Prathamesh"); 
console.log(`num is: ${num}`);

console.log("\n======== TYPE CONVERSION ==========");
console.log(` + operator can do the type conversion as well from string to number `);
var numStr = "100";
var num = + numStr;
console.log(`typeof numStr is: ${typeof numStr}`);
console.log(`typeof num is: ${typeof num}`);

var numStr = "Chandra";
var num = + numStr;
console.log(`typeof ${numStr} is: ${typeof numStr}`);
console.log(`typeof ${num} is: ${typeof num}`);

console.log("\n======== IMPLICITE OR EXPLICITE CONVERSION ==========");

var numAdd = 10 + 40; // 50
var strAdd = "Pooja " + 70;
console.log(`strAdd is: ${strAdd}`);

var str = "Trisha";
var newstr = + str;
console.log(typeof(newstr));

console.log(` + operator can do the the type conversion as well from string to number `);
var numStr = "100";
var num = + numStr; // Explicit conversion
console.log(`typeof numStr is: ${typeof numStr}`);
console.log(`typeof num is: ${typeof num}`);

var numStr = "Chandra";
var num = + numStr;
console.log(`typeof ${numStr} is: ${typeof numStr}`);
console.log(`typeof ${num} is: ${typeof num}`);

console.log(`== comparison : ${20 == "20"}`); // Implicit conversion

var myNumber = -77.333;
console.log(`myNumber values ${myNumber} and it's type is: ${typeof myNumber}`);
var strMyNumber = myNumber.toString();
console.log(`strMyNumber values ${strMyNumber} and it's type is: ${typeof strMyNumber}`);

console.log("\n======== BLOCK STATEMENT ==========");

console.log(` ====== if block ======= `);                      //it checks only one(1) condition true or false
console.log(`Check whether number is positive or negative...`);
var myNumber = -10;
if(myNumber>0){
    console.log(`Given number ${myNumber} is positive`);
}
var num = -4;
if (num<=0) {
    console.log(`Given number ${num} is Negative`);
}
var num1 =100;
var num2 = 200;
var num3 = 99;
if (num1>num2 && num1>num3) {                   //Logical && operator
    console.log(`You are greater man ${num1}`);
}
if (num2>num1 && num2>num3) {
    console.log(`You are greater man ${num2}`); 
}
if (num3>num1 && num3>num2) {
    console.log(`You are greater man ${num3}`);  
}

function evenOrOdd(value){
    if (value%2==0) {
        return "EVEN";
    }
    if (value%2!=0) {
        return "ODD";
    }
}
//evenOrOdd(45);
console.log(`The given Number is : `,evenOrOdd(45));

console.log(`\n ====== if-else block ======= `);            //it checks two(2) condition either true or false

var num2 = 200;
var num3 = 299;
if (num2>num3) {
    console.log(`The number ${num2} is Greator`);
} else {
    console.log(`The number ${num3} is Greator`);
}

function evenOrOdd(value){
    if (value%2==0) {
        console.log(`The given number ${value} is "EVEN NUMBER"`);
    } else {
        console.log(`The given number ${value} is "ODD NUMBER"`);
    }
}
evenOrOdd(45);
evenOrOdd(64);
//console.log(`The given Number is : `,evenOrOdd(45));

console.log(`\n ====== SWITCH STATEMENT ======= `);
// Get the Day name by passing day number
// 1 - Monday
// 2 - Tuesday
// 3 - Wednesday
// 7 - Sunday
var dayNumber = 4;
switch (dayNumber) {
  case 1:
    console.log(`Today is Monday`);
    console.log(`Monday is the start day of the week`);
    break;
  case 2:
    console.log(`Today is Tuesday`);
    break;
  case 3:
    console.log(`Today is Wednesday`);
    break;
  case 4:
    console.log(`Today is Thursday`);
    break;
  case 5:
    console.log(`Today is Friday`);
    break;
  case 6:
    console.log(`Today is Saturday`);
    break;
  case 7:
    console.log(`Today is Sunday`);
    console.log(`Sunday is the weekly off day`);
    break;
  default:
    console.log(`Not valid value provided`);
    break;
}
console.log(`After switch case statement`);


console.log(`\n ====== While Loop ======= `);           //it execute the loop no of times, depends on the condition we have passed
// Print numbers from 0 to 10
// initialization 0   condition <=10   update expression = ++
var i=0;  // i = 0 1 2  10  11              //initialization
while (i<=10) {  // true true               //condition
   console.log(i);  //0 1 2   10
   i++; // 1 2  10  11                      //Update Expression
}

console.log(`\n ====== do - While Loop ======= `);  //in do-while - statement is executed first, then checks the condition
// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var number = 0;
do {
    console.log(number);
    number++;
} while (number<=10);

console.log(`==========Print Reverse Table of 7 using do - While==============`);
// Print 70 to 7 by decrementing each time 7
 // 70  63  56  
var index =70;
do {
  console.log(index);
   index = index-7; 
} while (index>=7);


console.log(`\n ====== break statemnt ======= `); //it executes the break statement when we get the required output

var index = 0;
while (index<=10) {
   console.log(index);// 0 1 2 3 4 5
   if (index==5) {              //it print till iis not found 5, if found it will break
     break;
   } 
   index++;
}
console.log(`====if index==12 then it will break====`);
for (let index = 0; index < 20; index++) {
   console.log(index);
   if (index>=12) {             //it print till index is >= 12, then autometicaly break 
     break;
   }
}

console.log("=========continue statement============");

for (let index = 0; index < 6; index++) {
   //console.log(index); // 0 1  2 3
   if (index==3) {
     continue;                  //it will skip current value, and continue till condition not fails
   }
   console.log(index);
}
console.log("\n================WAP To Vowels a e i o u, A E I O U==========with Counter========")

var sentence = "Yes Just do it man, I know you can";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  //  var lower = sentence.toLocaleLowerCase();
    var char = sentence.charAt(index);
    if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
        char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
        console.log(char);
        counter = counter +1;
    }   
}
//console.log(lower);
console.log(`Total vowels in string is : ${counter}`);
//another way
// var sentence = "Yes Just do it man, I know you can";
// var count = 0;
// for (let index = 0; index < sentence.length; index++) {
//     var lower = sentence.toLowerCase();
//     var character = sentence.charAt(index);
//     if (character=="a" || character=="e" || character=="i" || character=="o" || character=="u") {
//         console.log(character);
//         count++;
//     }
    
// }
// console.log(`Total vowels in string is : ${count}`);

// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    var charCopy = char.toLowerCase();
    if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') {
        console.log(char);
        counter = counter +1;
    }   
}
console.log(`Total vowels in string is : ${counter}`);


console.log("\n===============Reverse String===========")
var sentence = "Yes Just do it man, I know you can";
// initi   cond  update 
var reverseString = "";
 var lastCharPosition = sentence.length-1;
for (let index = lastCharPosition; index >= 0; index-- ){
     var char = sentence.charAt(index);
      reverseString = reverseString.concat(char);
     // console.log(char);   
}
console.log(reverseString);

console.log("\n===========Scope of Variable=============var, let, const======");

var singerName = "Kishor Kumar";
// const PI = 3.1412;

let actorName;

console.log(actorName);

var isMarried = true;
if (isMarried) {
  let greet = "Congratulation";
  //console.log(greet);
}
//console.log(greet);

function add(num1, num2) {
  var result = num1 + num2;
  let PIN = 431202;
  console.log(`Result is : ${result}`);
  var isMarried = true;
  if (isMarried) {
    var greet = "Congratulation";
    const PI = 3.14; 
    let myName = "Mohit";
  }
  // console.log(PI);
  console.log(greet);
  console.log(`Result is : ${result}`);
  return result;
}
add(5, 5);
console.log(`Outside Result is : ${result}`);
// console.log(PIN);

console.log("=============ARRAY====================ARRAY");

let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; // Empty Array
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let arrayLength = arrayOfNumbers.length;
console.log(`Total Elements in arrayOfNumbers --> ${arrayLength}`);

let typeOfArray =typeof arrayOfNumbers;
console.log(`Type of array - arrayOfNumbers --> ${typeOfArray}`);

console.log(`=== Accessing array elements===`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

console.log(`Last Element : ${arrayLength-1}`);

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);

let indexOf7 = arrayOfNumbers.indexOf(7);
console.log(`Index of element 7 --> ${indexOf7}`);

console.log("=====if same value available in Array, it will select 1st occurance========");
let indexOf10 = arrayOfNumbers.indexOf(10);
console.log(`Index of element 10 --> ${indexOf10}`);

console.log("============ Traverse array in Reverse order==================");

console.log(`Traversing array using for loop in Reverse order`);
// initialization   condition  update 
let arrayOfNumbers2 = [5, 10, 4, 6, 7, 10, 6];
let lastIndex = arrayOfNumbers2.length-1;
for (let index = lastIndex; index >= 0; index--) {
    const element = arrayOfNumbers2[index];
    console.log(element);         // 6 10 7 6 4 10 5
}

console.log('============ Addition of Array Elements==================');

// Array of salaries
console.log(`Accessing salary of each employee`);
let arrayOfSalaries = [10000, 20000, 30000, 20000, 40000];
let sumOfSal = 0;// 30000
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index];// 10000 20000 30000
    sumOfSal = sumOfSal+element;
}
console.log(`Total Salary of all employee is : ${sumOfSal}`);
console.log('=============Different methods to perform operations on Array===============');
console.log('================Addign Element after last Element==============Push method');
console.log(`======== push() methods=========`);
let arrayOfNum1 = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum1);
arrayOfNum1.push(3);

arrayOfNum1.push(11, 34, 56); //multiple same time
console.log(arrayOfNum1);

console.log('================Addign Element at starting position==============unshift method');

console.log(`======== unshift() methods=========`);
var arrayOfNum2 = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum2);
arrayOfNum2.unshift(77);
arrayOfNum2.unshift(99, 111, 333);
console.log(arrayOfNum2);

console.log('================To Remove/Delete Element from end/last==============pop method');

console.log(`======== pop() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33];
let popResult = arrayOfNum.pop();   //it removes last element = 33
console.log(popResult);
console.log(arrayOfNum);

console.log('================To Remove/Delete Element from starting position==============shift method');

console.log(`======== shift() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33];
let shiftResult = arrayOfNum.shift();  //it removes element from start = 4
console.log(shiftResult);
console.log(arrayOfNum);

console.log('================To access Elements from wherever we want ==============slice method');

console.log(`======== slice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let sliceResult = arrayOfNum.slice(3);
let sliceRes = arrayOfNum.slice(2, 5);
console.log(arrayOfNum);
console.log(sliceResult);
console.log(sliceRes);

console.log('===============splice method to remove elements from middle of the array, also show the deleted elements==========');

console.log(`======== splice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceResult = arrayOfNum.splice(3);
console.log(`After using splice(3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceResult);

var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceRes = arrayOfNum.splice(2, 3);
console.log(`After using splice(2, 3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceRes);


console.log("=======map()=============");
const arrayOfNumber = [0, 2, 3, 5, 6];
// [ 10,  12, 13, 15, 16 ]
const arrayTransform = arrayOfNumber.map((currentValue)=>{
    return currentValue+10; // 0+10  2+10 
});
console.log(arrayTransform);