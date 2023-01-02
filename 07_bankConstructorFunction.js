function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
  }
  Bank.prototype.openTime = "9 AM IST";
  Bank.prototype.closeTime = "6 PM IST";
  let yesBank = new Bank("YES Bank", "Pune", "YES000423", 1453);
  let sbiBank = new Bank("SBI Bank", "Nagpur", "SBI000478", 1231);
  let mahBank = new Bank("Bank Of Maharashtra", "Solapur", "MAH000451", 1256);
  let axisBank = new Bank("AXIS Bank", "Mumbai", "AX000489", 1298);
  console.log(`1.`);
  console.log(`Bank Details is :`, yesBank);
  console.log(`Bank Details is :`, sbiBank);
  console.log(`Bank Details is :`, mahBank);
  console.log(`Bank Details is :`, axisBank);
  console.log(`------------------------------------------------------------------------------------------------------`);

  console.log(`2. `);
  console.log(`The Open Time of SBI Bank is :`,`"${sbiBank.openTime}"`,`And The Close Time of SBI Bank is :`,`"${sbiBank.closeTime}".`);
  console.log(`------------------------------------------------------------------------------------------------------`);

  console.log(`3. `);
  console.log(`The Bank Name is :`,`"${axisBank.bankName}"`,`And The Close Time of Axis Bank is :`,`"${axisBank.closeTime}".`);
  console.log(`------------------------------------------------------------------------------------------------------`);

  console.log(`4. `);
  console.log(`The Bank Name is :`,`"${yesBank.bankName}"`,`The Branch Code is :`,`"${yesBank.branchCode}"`,`And The Open Time of YES Bank is: `,`"${yesBank.openTime}"`);
