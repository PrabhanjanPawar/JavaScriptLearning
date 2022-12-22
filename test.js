// // Print numbers from 0 to 10
// // initialization 0   condition <=10   update expre = ++
// var i=0;  // i = 0 1 2  10  11
// var counter=0;
// while (i<=10) {  // true true
//    console.log(i);  //0 1 2   10
//    counter=counter+1;
//    console.log(counter);
//    i++; // 1 2  10  11
// }

// for (let index = 0; index < 10; index++) {
//     console.log(index);
//     if (index==6) {
//       break;
//     }

//  }

//  for (let index = 0; index < 6; index++) {
//     //console.log(index); // 0 1  2 3
//     if (index==3) {
//    //   console.log(`"Hey index no of 3rd is "${index}" "`);
//         continue;
//     }
//     console.log(index);

//}

//  var sentence = "Yes Just do it man, I know you can";
// // Print the vowels only aeiou or AEIOU
// var counter = 0;
// for (let index = 0; index < sentence.length; index++) {
//     var char = sentence.charAt(index);
//     if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' ||
//         char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
//         console.log(char);
//         counter = counter +1;
//     }
// }
// console.log(`Total vowels in string is : ${counter}`);

// var total=0;
// for (let number = 1; number <= 30; number++) {
//         if (number%2==0) {
//             console.log(number);
//             total=total+1;
//         }

// } console.log(`Total number of even no is ${total}`);

function greatestNo(number1, number2, number3) {
  if (
    typeof number1 == "number" &&
    typeof number2 == "number" &&
    typeof number3 == "number"
  ) {
    if (number1 > number2 && number1 > number3) {
      console.log(`${number1} is greator than ${number2} & ${number3}`);
    } else if (number2 > number1 && number2 > number3) {
      console.log(`${number2} is greator than ${number1} & ${number3}`);
    } else {
      console.log(`${number3} is greator than ${number1} & ${number2}`);
    }
  } else {
    console.log(`"Invalid Number, Please provide valid Number"`);
  }
}
greatestNo(56, 70, 80);
greatestNo(20, -90, 0);
greatestNo(67,"five", 29);