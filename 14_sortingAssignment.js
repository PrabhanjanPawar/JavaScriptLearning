


array_roll_numbers = [ 113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`\nNormal Array : `,array_roll_numbers);
const reverseArray = array_roll_numbers.reverse();
console.log(`\n1) ------ Reverse Array`);
console.log(reverseArray);

console.log(`\n2) ------ sort() Array without using any custome logic`);
const sortWithoutLogic = array_roll_numbers.sort();
console.log(sortWithoutLogic);

console.log(`\n3) ------ sort array in ascending order using custome logic`);
const arrayAscend = sortWithoutLogic.sort( (element1, element2) => {
            return element1 > element2 ? 1 : -1;
});
console.log(arrayAscend);

// console.log(`\n3) ------ sort array in Descending order using custome logic`);
// const arrayDescend = sortWithoutLogic.sort( (element1, element2) => {
//             return element1 < element2 ? 1 : -1;
// });
// console.log(arrayDescend);

console.log(`\n4) ------ Find the greatest number from array`);
//const length = arrayAscend.length-1;
console.log(arrayAscend);
const greatestElement = arrayAscend.slice(arrayAscend.length-1);
console.log(`Greatest element from the sorted array is : "${greatestElement}"`);

console.log(`\n5) ------ Find the smallest number from array`);
console.log(arrayAscend);
const smallestElement = arrayAscend.slice(0,1);         //slice method() - we have to pass start and end index to show the element   
console.log(`Smallest element from the sorted array is : "${smallestElement}"`);
//console.log(arrayAscend.slice(0,1));

console.log(`\n6) ------Remove Duplicate elements from array`);

const newSet = new Set();
newSet.add(11);
newSet.add(32);
newSet.add(45);
newSet.add(45);
newSet.add(45);
newSet.add(56);
newSet.add(56);
newSet.add(109);
newSet.add(113);
newSet.add(799);

console.log(newSet);
