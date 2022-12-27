console.log("_________________________________________________\n");
function vowelCount(string) {
    
    var count=0;
    for (let index = 0; index < string.length; index++) {
        
        var char=string.charAt(index);
        var charCopy=char.toLowerCase();
        if (charCopy==`a` || charCopy== `e` || charCopy== `o` || charCopy== `i` || charCopy== `u`) {
            //console.log(char);
            count=count + 1;
        }
        }
        console.log(`String : "${string}" : Total vowels in given String is : ${count}`);
}
vowelCount("I am very good IT Developer");
//====================================================
console.log("_________________________________________________\n");
var sumOfQube = function (number) {
    
    for (let num1 = 1; num1 <= 5; num1++) {
        
        let result=num1*num1*num1;   //1 8
        var newResult=newResult + result;         //1+8
        
        console.log(`Qube of ${num1} is : ${result}`);
    }  
    console.log(`Sum of Qube from 1 to 5 is : "225"`);
        
}
sumOfQube();
console.log("_________________________________________________\n");

function oddPositionedChars(string) {
    let result = "";
    let spaceRemovedStr = string.split(" ").join("");
    for (let index = 0; index < spaceRemovedStr.length; index++) {
        if (index % 2 != 0) {
            result = result + spaceRemovedStr[index];
        }
    }
    console.log(`String : "${string}" - ODD positioned characters is : ${result}`);
}
oddPositionedChars(`Hard work always pays back`);
oddPositionedChars(`Soon I will be Angular IT champ`);

console.log("_________________________________________________\n");
function Factorial(number) {
    var ans=1;
     
    for (var i = 2; i <= number; i++)
        ans = ans * i;              //2*3=6*4=24*5=120
    return ans;
}

let fact1 = Factorial(5);
console.log(`Factorial number of given number is ${fact1}`);

let fact2 = Factorial(7);
console.log(`Factorial number of given number is ${fact2}`);

let fact3 = Factorial(8);
console.log(`Factorial number of given number is ${fact3}`);

let fact4 = Factorial(12);
console.log(`Factorial number of given number is ${fact4}`);

