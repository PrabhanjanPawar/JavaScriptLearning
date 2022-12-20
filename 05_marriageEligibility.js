console.log(`---------"This is Marriage Eligibility Check"----------`);

function marriageEligibility(gender, age) {
    
    if (gender=="Female" || gender=="Male") {
        
        if (age>=21 && gender=="Male") {
            console.log(`Age - ${age} : Hey Man, "You are eligible for Marriage"`);
            return;
        } 
            if(age>=18 && gender=="Female") {
                console.log(`Age - ${age} : Hey Lady, "You are eligible for Marriage"`);
                return;
            }
                if(age)
                    {
                        console.log(`Age - ${age} : "Sorry you are not Eligible for Marriage"`);
                     }
    }
    else{
        console.log(`Gender : "${gender}", is not valid gender, Please provide valid details`);
    }
}
marriageEligibility("Male",17);
marriageEligibility("Male",25);
marriageEligibility("Female",16);
marriageEligibility("Female",28);
marriageEligibility("Other",35);
//marriageEligibility("Other",41);

