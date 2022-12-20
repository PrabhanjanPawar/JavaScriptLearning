function monthOfYear(monthNumber) {
    
    switch (monthNumber) {
        case 1: 
            console.log(`Month : ${monthNumber} : "January"`);
            break;
        case 2:
            console.log(`Month : ${monthNumber} : "February"`);
            break;
        case 3:
            console.log(`Month : ${monthNumber} : "March"`);
            break;
        case 4:
            console.log(`Month : ${monthNumber} : "April"`);
            break;
        case 5:
            console.log(`Month : ${monthNumber} : "May"`);
            break;
        case 6:
            console.log(`Month : ${monthNumber} : "June"`);
            break;
        case 7:
            console.log(`Month : ${monthNumber} : "July"`);
            break;
        case 8:
            console.log(`Month : ${monthNumber} : "August"`);
            break;
        case 9:
            console.log(`Month : ${monthNumber} : "September"`);
            break;
        case 10:
            console.log(`Month : ${monthNumber} : "October"`);
            break;
        case 11:
            console.log(`Month : ${monthNumber} : "November"`);
            break;
        case 12:
            console.log(`Month : ${monthNumber} : "December"`);
            break;
        
        default:
            console.log(`Month : ${monthNumber} : "Invalid Month, Please enter valid Month"`);
            break;
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);