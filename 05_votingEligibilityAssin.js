console.log(`******* This is Eligibility Check for Voting using if_else Statement *******`);
console.log(`1)----------------------------------------------------------------------------`);

var ageCheck = function (age) {

    if (typeof age=="number") {
        
        if (age<=0 || age>120) {
            console.log(`Your age is : ${age}, "Invalid Data"`);
            return;
        }
            if (age>0 && age<18) {
                console.log(`Your age is : ${age}, " Sorry, You are not eligible for Voting"`);
            } 
            if (age>=18 && age <=120) {
                console.log(`Your age is : ${age}, "You are eligible for Voting"`);
            }
    }else {
        console.log(`Your age is : ${age}, "Please enter valid Age"`);
    }
}

ageCheck(45);
ageCheck(17);
ageCheck(8);
ageCheck(20);
ageCheck(-10);
ageCheck(200);
ageCheck(0);
ageCheck("fifty");
//*********************************************************************** */ marks<=0 || marks>100

console.log(`1)----------------------------------------------------------------------------`);

function gradeCalculation(marks) {
    
        if (typeof marks=="number") {
             console.log(`Entered marks : ${marks}`);
        
            if (marks>=90 && marks<=100) {
                console.log(`"Fantastic marks : "${marks}", Your grade is A+"`);
                return;
                 }
            if (marks>=75 && marks<90) {
                console.log(`"Excellent marks : ${marks}", Your grade is A"`);
                return;
                } 
            if (marks>=50 && marks<75) {
                    console.log(`"Good Marks : "${marks}", Your grade is B"`);
                    return;
                } 
            if (marks>=35 && marks<50) {
                        console.log(`"Marks is "${marks}", Your grade is C, Need Improvement"`);
                        return;
                    }
            if (marks>0 && marks<35) {
                            console.log(`"Marks is "${marks}", Your Result is Fail"`);
                            return;
                        }
                    }
        else (marks<=0 || marks>100); {
             console.log(`Entered marks : "${marks}" "Marks is "${marks}", Please provide the Valid Marks"`);
                                
            } 
        
    }
    gradeCalculation(98);
    gradeCalculation(80);
    gradeCalculation(90);
    gradeCalculation(0);
    gradeCalculation(150);
    gradeCalculation(-7);
    gradeCalculation(35);
    gradeCalculation(29);
    gradeCalculation(64);
    gradeCalculation(49);
    gradeCalculation("91");
    gradeCalculation("Eighty");
