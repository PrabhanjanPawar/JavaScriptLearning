


const arrayOfNum = [0, 20, 3, 5, 6, 10];
const arrayFilter =arrayOfNum.filter( (currentValue, index)=> {
   return currentValue > 5; // 0
} );
console.log(arrayFilter);

const arrayOfNum1 = [0, 20, 3, 5, 6, 10];
 const arrayOfEvenNum =arrayOfNum.filter( (currentValue, index)=> {
    return currentValue%2==0; // 0
 } );
 console.log(arrayOfEvenNum);
