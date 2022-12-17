console.log(`***** This is Ternary Operator & Function Expression Assignment *****\n`);

var checkEligibility = function (gradScore, hscScore, sscScore, candidateName){

    var result=(gradScore>=70 || hscScore>=80 || sscScore>=90) ? "You are Eligible for TCS Interview" : "Unfortunately you are not eligible for Interview";
    //console.log("${candidateName}", result);
    console.log(`    Hey "${candidateName}" ${result}.\n`);
}
checkEligibility(80, 86, 90, "Prabhanjan");
checkEligibility(70, 65, 55, "Santosh");
checkEligibility(60, 79, 88, "Rohit");