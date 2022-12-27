const arrayNumbers=[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
console.log(`1)------------------------------------`);
console.log(`   Total no of elements in above Array is :`,arrayNumbers.length);
console.log(`2)------------------------------------`);
console.log(`   First element of Array is : `,arrayNumbers[0]);
let arrayNumLength=arrayNumbers.length;
console.log(`   Last element of Array is : `,arrayNumbers[arrayNumLength-1]);
console.log(`3)------------------------------------`);
console.log(`   Third last element in the given Array is :`,arrayNumbers[arrayNumLength-3]);

console.log(`4) EVEN Numbers------------------------------------`);
for (let index = 0; index < arrayNumLength; index++) {
    const num = arrayNumbers[index];
     if (num%2==0) {
         console.log(num);
    }
    
}

console.log(`5) ODD Numbers------------------------------------`);
for (let index = 0; index < arrayNumLength; index++) {
    const num = arrayNumbers[index];
     if (num%2!=0) {
         console.log(num);
    }
    
}

console.log(`6) EVEN Positioned Numbers------------------------------------`);
for (let index = 0; index < arrayNumLength; index++) {
    const element = arrayNumbers[index];
    if (index%2==0) {
       // console.log(index);
        console.log(element);
    }
}

console.log(`7) ODD Positioned Numbers------------------------------------`);
for (let index = 0; index < arrayNumLength; index++) {
    const element = arrayNumbers[index];
    if (index%2!=0) {
        //console.log(index);
        console.log(element);
    }
}

console.log(`8) SUM of all elements in Array ------------------------------------`);
let sumOfArray=0;
for (let index = 0; index < arrayNumLength; index++) {
        const element = arrayNumbers[index];
    
        sumOfArray=sumOfArray+element;
    }
    console.log(sumOfArray);

console.log(`9) Numbers which are Multiple of 5 ------------------------------------`);
for (let index = 0; index < arrayNumLength; index++) {
    const num = arrayNumbers[index];
     if (num%5==0) {
         console.log(num);
    }
}

console.log(`10) Is Number 115 is Available? ------------------------------------`);
console.log(`   `,arrayNumbers.includes(115));

console.log(`11) Is Number 23 is Available? ------------------------------------`);
console.log(`   `,arrayNumbers.includes(23));

console.log(`12) Insert Numbers 55,66 before index 3 ------------------------------------`);
console.log(arrayNumbers);
arrayNumbers.splice(3, 0, 55,66);
console.log(arrayNumbers);

console.log(`13) Delete 3 Elements from index 4 ------------------------------------`);
console.log(`Before Deleting elements in Array`,arrayNumbers);
arrayNumbers.splice(4, 3);
console.log(`Before Deleting elements in Array`,arrayNumbers);