console.log(`*******This is "if" Block Assignment*******`);
console.log(`1)--------------------------------------------`);

var ageCheck=function (age) 
{
    
    if(age>=18 && age<=120)
        {
            console.log(`    "AGE =  ${age}"     : "Hey You are Elibile for Voting"\n`);
        }
    if(age>0 && age<18) 
        {
            console.log(`    "AGE =  ${age}"     : "Hey Unfortunately You are Not Eligible for Voting"\n`);
        }
    if (age<=0 || age>120) 
        {
            console.log(`    "AGE =  ${age}"     :  "Invalid Data"\n`);
    }
}
ageCheck(45);
ageCheck(17);
ageCheck(8);
ageCheck(20);
ageCheck(-10);
ageCheck(200);
ageCheck(0);

console.log(`2)---------------------------------------------------`);
function gradeCalculation(marks) {
 
    if (marks>=90 && marks<=100)
         {
            console.log(`    Fantastic Marks, "${marks}" Your Grade is A+`);
         }
    if (marks>=75 && marks<=90)
         {
            console.log(`    Excellent Marks, "${marks}" Your Grade is A`);
         }
    if (marks>=50 && marks<=75)
         {
            console.log(`    Good Marks, "${marks}" Your Grade is B`);
         }
    if (marks>=35 && marks<=50)
         {
            console.log(`    Your Marks, "${marks}" Your Grade is C, Need Improvement`);
         }
    if (marks<34 && marks>0) 
         {
            console.log(`    Your Marks, "${marks}" "You are fail, Please do study"`);
         }     
    if (marks<=0 || marks>100) 
         {
            console.log(`    "${marks}" Please provide valid Marks`);
         }

}   
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(91);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);