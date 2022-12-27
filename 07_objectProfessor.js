console.log(`"-----Professor Assignment-----"`);
const professor = {

    degrees : {
            engineerig : "CSC",
            PHD : "AdvComputing",
            MS : "Mass Communiation",
            MBA : "Fashion Designing"
        },
    certificates : {
        certificate1 : "Hacker Rank ertification",
        certificate2 : "Certificate in IFE Course",
        certificate3 : "Certificate in Adv Programming",
      },
    //     concatDegrees : function () {
    //         console.log(`After Concaiation : \n`, this.certificate1 + this.certificate2 + this.certificate3 );        
    //   }
    
}
console.log(`Empty Object : `);
professor.name = "Prabhanjan";  //to add properties on empty constructor
professor.age = 31;
professor.gender = "Male";
professor.city = "Pune";
console.log(`1)--Add Prperties ---:\n`,professor);
console.log(`"--------------------------------------------------------------"`);
//console.log(professor.degrees.engineerig);
//console.log(`2)---Nested Object : Degrees : `,professor);
console.log(`2)---Include Nested Object Properties : \n`,professor.degrees);
console.log(`"--------------------------------------------------------------"`);
console.log(`3)---Add one more Nested Object : Certificates : \n`,professor.certificates);
console.log(`"--------------------------------------------------------------"`);
//console.log(professor.concatDegrees);
professor.mobNumber = 9503850345;
console.log(`5)---New Property : MobNumber=9503850345 added `,professor);
console.log(`"--------------------------------------------------------------"`);
professor.age=41;
console.log(`6)---Modified existing Property Age 31 to 41 : `,professor);
console.log(`"--------------------------------------------------------------"`);
delete professor.certificates.certificate2;
console.log(`7)---Delete Certificate2 : `,professor.certificates);
console.log(`"--------------------------------------------------------------"`);
professor.certificates.certificate4 = "Forensic Science";
console.log(`8)---Added new Certificate:"Forensic Science"`,professor.certificates);
console.log(`"--------------------------------------------------------------"`);
console.log(`9)---Nested Object log on Consol: `,professor.certificates);
console.log(`"--------------------------------------------------------------"`);
