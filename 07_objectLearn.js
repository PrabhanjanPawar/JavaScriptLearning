const person = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates"
  }
  console.log(typeof person);
  console.log(person);
  
  const personAge = person.age;
  console.log(`Person age is: ${personAge}`);
  
  const personName = person["name"];
console.log(personName);

console.log(`Nested object`);
const student = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70,
        math: 90,
        english: 87
    }
}
console.log(`Accessing an Nested object property`);
const scienceMark =  student.marks.science;
console.log(scienceMark);

console.log(`Object entries`);
const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates"
}
console.log(Object.entries(billgates));
console.log(Object.keys(billgates));
console.log(Object.values(billgates));

console.log(`Object entries`);
const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates"
    company: "Microsoft",
    valuation: "130B $"
}