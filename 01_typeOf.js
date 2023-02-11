console.log("**************Today's 2nd Assignment**************");
console.log("=======Before Initialization=======");
var bankName;
console.log(bankName);
console.log("=======After initialization=======");
bankName="SBI Bank";
console.log("bankName =", bankName);
var bankType=typeof bankName;
console.log("DataType is ",bankType);

console.log("==========dataType of marks='90%'============");
var marks="90%";
var marksType=typeof(marks);
console.log(marksType);

console.log("=======dataType of 'isWorking' before Initialization=======");
var isWorking;
console.log(isWorking);
console.log("=======dataType of 'isWorking' after Initialization=======");
isWorking=true;
var workingType=typeof isWorking;
console.log(workingType);

console.log("=======dataType of 'Hundred and Seven'=======");
var totalCount="Hundred and Seven";
console.log(totalCount);
var countType=typeof (totalCount);
console.log(countType);

console.log("====dataType After updation of totalCount value to 107 =====");
totalCount=107;
console.log(totalCount);
var countType=typeof(totalCount);
console.log("107 is",countType);
