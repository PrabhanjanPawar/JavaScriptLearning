class Bank{

    constructor(bankName, location, accountNo, ifsc, interestRate) {
        this.bankName=bankName;
        this.location=location;
        this.accountNo=accountNo;
        this.ifsc=ifsc;
        this.interestRate=interestRate;
    }

}
console.log(`A) ----- Created "Bank" class with Data Menbers`);
console.log(`--------------------------------------`);

let axisBank = new Bank("Axis Bank", "Pune", 657865423557, "AXIS00000890", "8.5%");
let sbiBank = new Bank("SBI Bank", "Satara", 657890087654, "SBI00000564", "7.8%");
let iciciBank = new Bank("ICICI Bank", "Mumbai", 908976542314, "ICICI0000045", "8");
let kotakBank = new Bank("Kotak Bank", "Kolhapur", 123456789012, "KOTAK00000675", "9%");
let hdfcBank = new Bank("HDFC Bank", "Goa", 098765432109, "HDFC0000078", "8.3%");
let punjabBank = new Bank("Punjab Bank", "Dubai", 678678678678, "PNB00000678", "10%");
console.log(`B) ----- Created Object for all Banks`);
console.log(`--------------------------------------`);

console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(punjabBank);

console.log(`C) ----- Created Map with key should be "Account No" and value should be "Bank Object"`);
console.log(`--------------------------------------`);

const mapOfBanks=new Map();
mapOfBanks.set(657865423557, axisBank);
mapOfBanks.set(657890087654, sbiBank);
mapOfBanks.set(908976542314, iciciBank);
mapOfBanks.set(123456789012, kotakBank);
mapOfBanks.set(098765432109, hdfcBank);
mapOfBanks.set(678678678678, punjabBank);
//mapOfBanks.delete(908976542314);  To DELETE any object using "Key".

const keysOfBanks = mapOfBanks.keys();
console.log(keysOfBanks);
//const sizeOfBank=mapOfBanks.size;
//console.log(sizeOfBank);          It will return the size of Map.

//console.log(mapOfBanks.has(908976542314));    It checks whether given value is available or Not (True or False) format

console.log(`\n D) ----- Traversing of Map with BankName, AccountNo, InterestRate`);
console.log(`--------------------------------------`);

for (const key of keysOfBanks) {
    
        const bank = mapOfBanks.get(key);
        //console.log(bank.bankName, bank.accountNo, bank.interestRate);    
        console.log(`Bank Name : ${bank.bankName}       Account Number : ${bank.accountNo}        Interest Rate : ${bank.interestRate}`);
}
