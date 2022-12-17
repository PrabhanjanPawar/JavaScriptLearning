console.log(`******* THIS IS TERNARY OPERATOR ASSIGNMENT *******\n`);
console.log(`1)--------Find the Greatest Number--------\n`);
var operator=function(number1, number2){

    var number1, number2;
//    var greatestNo= number1 > number2 ? "Greatest Number" : "Not Greatest Number";
    var greatestNo = number1 > number2 ? number1 : number2;
    console.log(`     The Greatest Number amongst "${number1} and ${number2}" is "${greatestNo}"`);
}
operator(10, -10);
operator(800, 899);

console.log(`\n2)--------Check Given Number is Even or Odd--------\n`);

var evenOdd = function(number){

    var checkNumber=number%2==0 ? "EVEN Number or True" : "ODD Number or False";
    console.log(`    The given Number "${number}" is "${checkNumber}"`);
    return checkNumber;

}
var result=evenOdd(29);
var result=evenOdd(44);
var result=evenOdd(0);
var result=evenOdd(101);

console.log(`\n3)--------Check the Length of given Word is Even or Odd--------\n`);

   var wordEvenOdd = function(value){

        var lengthOfWord=value.length %2==0 ? "EVEN" : "ODD";
        console.log(`    The Length of "${value}" is "${lengthOfWord}"`);
       // return lengthOfWord;
    }
    //var showResult=
    wordEvenOdd("JavaScript");
    var showResult=wordEvenOdd("Developer");
    var showResult=wordEvenOdd("Google");