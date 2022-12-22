console.log(`------------"Leap year Assignment"------------\n`);

var check_leap_year=function (leap_year) {
    
    if (typeof leap_year=="number") {
        
        if (leap_year%4==0) {
            console.log(`Year - ${leap_year} : "This is LEAP Year"`);
        }
        else{
            console.log(`Year - ${leap_year} : "This is NOT LEAP Year"`);
     }
    }else{
        console.log(`Year - ${leap_year} : "Please provide valid input"`);
    }
}
check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(1945);
check_leap_year(null);
check_leap_year("Twenty Twenty");
check_leap_year(undefined);
check_leap_year(NaN);
check_leap_year(1750);
