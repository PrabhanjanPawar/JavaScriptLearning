class Bank{
    constructor(bankName, location, accountNo, ifsc, interestRate) {
        this.bankName=bankName;
        this.location=location;
        this.accountNo=accountNo;
        this.ifsc=ifsc;
        this.interestRate=interestRate;
    }
}
console.log(`A) ----- Created "Bank" Class with its Data Members...`);
console.log(`-------------------------------------------------------`);
console.log(`B) ----- Created Objects for "Bank" Class...`);
let axis_bank = new Bank("Axis Bank", "Pune", 657865423557, "AXIS00000890", "8.5%");
let sbi_bank = new Bank("SBI Bank", "Satara", 657890087654, "SBI00000564", "7.8%");
let icici_bank = new Bank("ICICI Bank", "Mumbai", 908976542314, "ICICI0000045", "8");
let kotak_bank = new Bank("Kotak Bank", "Kolhapur", 123456789012, "KOTAK00000675", "9%");
let hdfc_bank = new Bank("HDFC Bank", "Goa", 098765432109, "HDFC0000078", "8.3%");
let punjab_bank = new Bank("Punjab National Bank", "Dubai", 678678678678, "PNB00000678", "10%");
console.log(axis_bank);
//console.log(`Axis Bank details are : `,axis_bank.bankName,axis_bank.location,axis_bank.accountNo,axis_bank.ifsc,axis_bank.interestRate);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(punjab_bank);

console.log(` C) ----- Added all Bank objects & Traverse using For of Loop with Bank Name & Location`);
const arrayBank=[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,punjab_bank]; //created array of objects
//console.log(arrayBank);
for (const bank of arrayBank) {
    
        console.log(`       ${bank.bankName} : ${bank.location}`);
}

console.log(`\n D) ----- Find the Object "Kotak Bank" using For of Loop`);
for (const bank of arrayBank) {
        if (bank.bankName=="Kotak Bank") {
            console.log(` Bank Name : ${bank.bankName},\n Location : ${bank.location},\n Account No. : ${bank.accountNo},\n IFSC : ${bank.ifsc},\n Rate of Interest : ${bank.interestRate}`);
            //console.log(kotak_bank);
        }
    
}
console.log(`\n E) ----- "Log the Details on Console using For Loop"\n`);
// for (const bank of arrayBank) {                                                  //using For of Loop
//         console.log(bank.bankName, bank.location, bank.accountNo, bank.ifsc, bank.interestRate);
// }
for (let index = 0; index < arrayBank.length; index++) {                            //Using normal for Loop
    const element = arrayBank[index];
    console.log(element);
    
}