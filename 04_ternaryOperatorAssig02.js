console.log(`******* THIS IS TERNARY OPERATOR ASSIGNMENT-02 *******\n`);
console.log(`Step 1)------------------------------------------------\n`);

function maleMarriageEligibility(gender, age, boyName){

    var maleResult= (gender="Male" && age>=21) ? "Eligible for Marriage." : "Not Eligible for Marriage.";
    console.log(`       Hey "${boyName}" you are ${maleResult}\n`);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log(`Step 2)------------------------------------------------\n`);
function femaleMarriageEligibility(gender, age, girlName){

    var girlResult= (gender="Female" && age>=18) ? "Eligible for Marriage." : "Not Eligible for Marriage.";
    console.log(`       Hey "${girlName}" you are ${girlResult}\n`);    
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");