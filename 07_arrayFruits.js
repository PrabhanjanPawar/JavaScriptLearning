const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Array of Fruits is :`,fruits_seasonal);

console.log(`1) -----First & Last Element of Array ------------------------------------`);
let lengthElement=fruits_seasonal.length; // To define the length of Array;
let firstFruit=fruits_seasonal[0];
let lastFruit=fruits_seasonal[lengthElement-1];
console.log(`    First Element of Array is : "${firstFruit}", And Last Element of Array is : "${lastFruit}"`);

console.log(`2) -----Add "Papaya" at First Position------------------------------------`);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`3) -----Remove "Mango" from Array------------------------------------`);
console.log(`   Before Removing "Mango" from Array is :  ${fruits_seasonal}`);
let remove = fruits_seasonal.splice(4, 1,);
console.log(`   After Removing "Mango" from Array is :  ${fruits_seasonal}`);

console.log(`4) -----Insert "Pineapple at last position"------------------------------------`);
console.log(`   Before Inserting "Pineapple" in Array is : , ${fruits_seasonal}`);
fruits_seasonal.push("Pineapple");
console.log(`   After Inserting "Pineapple" in Array is , ${fruits_seasonal}`);

console.log(`5) -----Insert "Dragon Fruit" before "Water Melon"------------------------------------`);
let addAfterElement = fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(fruits_seasonal);

console.log(`6) ----- Replace "Orange" with "Kivi" ------------------------------------`);
let replaceKivi = fruits_seasonal.splice(2, 1, "Kivi");
console.log(fruits_seasonal);

// console.log(`7) ----- " Log Elements from 1 to 4" ------------------------------------`);
// let someElements = fruits_seasonal.splice(1,4);
// //console.log(fruits_seasonal);
// console.log(`   After using splice(1,4) method `);
// //console.log("Array after deleting elements ", fruits_seasonal);
// console.log("   Elements from 1 to 4 is : ", someElements);

console.log(`8) ----- " Display only last 3 Elements" ------------------------------------`);
console.log(fruits_seasonal);
let lastThreeElement = fruits_seasonal.length;

for (let index = 4; index < lastThreeElement; index++) {
    const element = fruits_seasonal[index];
    console.log(element);
    
}

