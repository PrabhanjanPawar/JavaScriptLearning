console.log(`*****"For Loop : to print numbers from 5 to 15 incrementing by 1"*****\n`);

function forLoopOne(number) {
    
    var num;
    for (let num = 5; num <= 15; num++) {
        //const element = array[index];
        console.log(num);
    }
}
forLoopOne();

console.log(`*****"For Loop : to print numbers from 50 to 40 decrementing by 1"*****\n`);

function forLoopTwo(number1) {
    
    var num1;
    for (let num1 = 50; num1 >= 40; num1--) {
        console.log(num1);
    }
}forLoopTwo();

console.log(`*****"For Loop : to find First 15 ODD numbers"*****\n`);

function forLoopOdd(number2) {
 
    var num2;
    var temp=0;
    for (let num2 = 1; num2 < 30; num2++) {
        
        if (num2%2!=0) {
            console.log(num2);
        }      
        // temp=num2;
        // num2++;
        // console.log(temp);
    }   
}forLoopOdd();

console.log(`*****"For Loop : to find First 10 EVEN numbers"*****\n`);

function forLoopEven(number3) {
 
    var num3;
    for (let num3 = 1; num3 < 20; num3++) {
        
        if (num3%2==0) {
            console.log(num3);
        }      
        // temp=num2;
        // num2++;
        // console.log(temp);
    }   
}forLoopEven();

console.log(`*****"For Loop : for Table of 5"*****\n`);

    function forLoopTable(number5) {
    
        var num5;
        for (let num5 = 1; num5 <=10; num5++) {
    
            console.log(num5*5);
        }
    }
    forLoopTable();

console.log(`*****"For Loop : for Table of 10"*****\n`);

  
