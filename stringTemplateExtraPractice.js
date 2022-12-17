console.log(`*****Simple Practice of String Template*****`);

var simpleString="Trisha is very Good girl, she Loves Chocolates";

console.log(simpleString);
// Lenght of String...
var length=simpleString.length;
console.log(`Length of given string is :`,length);
// charAt - to find position at specific index...
console.log(`Character at 10th Position is : `,simpleString.charAt(10));
// To Concatinate two or more strings...
var string1="Trisha";
var string2="Pawar";
console.log(`2 Strings after concatination is : `,string1.concat("Prabhanjan",string2));
//indexOf - to find the particular word from the given stringsss
console.log(`To find the index of "Good" word is : `, simpleString.indexOf("Good"));
//To find the index of last word given in the String 
console.log(`Last word in the given string is : `,simpleString.lastIndexOf("Loves"));
// To replace any word with the help of Replace method
console.log(`String after replacement is :`, simpleString.replace("Good","Innocent"));
//toUppercase
console.log(simpleString.toUpperCase());
//to Remove start & End (both the extra spaces in the given string)Trim
var newString="           Trisha pawar, Pune     ";
//console.log(newString.trim());    Remove all the extra spaces 
//console.log(newString.trimStart());  Removes starting spaces from string
console.log(newString.trimEnd());      // Remove ending spaces from string
//To convert from number to "string"
var number=13;
console.log(`to convert from number to string : ${number.toString()}`);
//To find the given word is included(available) in the given string : Result in True or False
var string="Trisha Prabhanjan Pawar";
console.log(`To find the word "Prabhanjan" is available in the given string: ${string.includes("Prabhanjan")}`);
//To search particular word from the given string
console.log(`To find the particular word in the given string is "Pawar" ${string.search("Pawar")}`);
//to find word from the given length
console.log(`To find the word "Prabhanjan" ${string.slice(7,17)}`);
//
console.log(`To find the subStrig from the given string: ${string.substring(10,17)}`);
//To convert string from upper to lowerCase
var newString="PRABHANJAN PAWAR";
console.log(`To convert From Uppercase to LowerCase : ${newString.toLowerCase()}`);


