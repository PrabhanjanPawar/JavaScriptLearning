console.log(`\n" ***** While Loop to print Numbers from 5 to 15 by Incrementing 1***** "\n`);
var i=5;                //Initialization/declatartion;
while (i<=15) {         //Condition
    console.log(i); 
    i++;                //Update Expression
}

console.log(`\n" ***** While Loop to print numbers from 50 to 40 by Decrementing 1***** "\n`);
var a=50;               //Initialization/declatartion;
while (a>=40) {         //Condition
    console.log(a);     
    a--;                //Update Expression
}

console.log(`\n" ***** While Loop to find 15 first ODD Numbers***** "\n`);

var b=1;
var counter=0;
while (b<=100) {
    if (b%2!=0) {
        console.log(b);        
        counter=counter+1;
    }
    if (counter==15) {
        break;
    }
    b++;
}  
console.log(`Total no of ODD numbers : ${counter}`);

console.log(`\n" ***** While Loop to find 10 first EVEN Numbers***** "\n`);

var d=1;
var counter=0;
while (d<=100) {
    if (d%2==0) {
        console.log(d);        
        counter=counter+1;
    }
    if (counter==10) {
        break;
    }
    d++;
}  
console.log(`Total no of EVEN numbers : ${counter}`);