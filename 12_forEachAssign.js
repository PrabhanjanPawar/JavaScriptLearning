

const arrayNumbers=[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(arrayNumbers);
console.log(`1) ----- Array Element with its Index `);
arrayNumbers.forEach(function(currentValue, index, array) {
    console.log(`    The Array Element is : ${currentValue} and it index is : ${index} `);
    
});

console.log(`2) ----- Positive numbers using forEach and Arrow function `);
arrayNumbers.forEach((currentValue) => {
    if (currentValue > 0) {
        console.log(`    The element "${currentValue}" is Positive`);

    }
});

console.log(`3) ----- Find Negative numbers and added into new Array `);
negativeArray = [];
arrayNumbers.forEach((currentValue) => {
    if (currentValue < 0) {
        console.log(`   The elemen "${currentValue}" is Negative`);
       // console.log(negativeArray);
        negativeArray.push(currentValue);

    }
})
console.log(`   The Array of Negative Element is : `, negativeArray);
console.log(`4) ----- Find Even Numbers and Log on consol `);
arrayNumbers.forEach((currentValue) => {
    if (currentValue%2==0) {
        console.log(`   The Even Element is : ${currentValue}`);
    }
});

console.log(`5) ----- Find Sum of all array Element`);
let sumOfArray=0;
arrayNumbers.forEach((currentValue)=>{
    //console.log(currentValue);
    sumOfArray=sumOfArray+currentValue;
});
console.log(`   The Sum of array element is : ${sumOfArray}`);

console.log(`6) ----- Find Only Even Positioned Value `);
const evenPositionArray = [];
arrayNumbers.forEach((currentValue,index)=>{
    if (index%2==0) {
        //console.log(currentValue);
        evenPositionArray.push(currentValue);
               
    }
});
console.log(`Even index positioned elements are : ${evenPositionArray}`);
