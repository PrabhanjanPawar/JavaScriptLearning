console.log("1)------------------------------------------");
console.log("*****This is no argument and no return type function*****");
function important(){
    console.log("javaScript is very important language in every Programing Language.");
}
important();

function noArgument(){
    console.log("This is no Argument and no Return type function.");
}
noArgument();

console.log("2)------------------------------------------");
console.log("*****This is function with Arguments*****");
function personalDetails(firstName, lastName, collegeName){
    console.log(firstName, lastName, collegeName);
}
personalDetails("Prabhanjan", "Pawar", "Zeal Institute Pune");

console.log("3)-----------------------------------------------");
console.log("*****swap two values with using Function*****");
function swapValuesDude(value1, value2){
    
    console.log("===values before swap===");
    console.log(value1, value2);

    console.log("===Values after Swap===");
    temp=value1;
    value1=value2;
    value2=temp;
    console.log(value1, value2);

}
swapValuesDude("Virat", "Anushka");
swapValuesDude("1000", "2000");
console.log("4)--------------------------------------------------");

console.log("*****Addition of 3 parameters using Functions*****");
function addThreeFunction(value1, value2, value3){
    console.log("values before Addition:", value1, value2, value3 );
    console.log("Values after Addition:", value1+value2+value3);
    console.log("------------------------");
}
addThreeFunction(10.23, 600, 40);
addThreeFunction("Hello", "Good","Morning");

