function squreOfWordLength(string){
 
    var value=string.length;
    console.log(`count string: ${value} squre of length: ${value*value}\n`);
}
squreOfWordLength("javaScript");
squreOfWordLength("Google Chrome");
squreOfWordLength("Developer Smart");

var string=function(){

    var string1="I am Anguler Developer";
    var string2=string1.length;
    console.log(`The length is: ${string2}`);
    var str=string1.split(" ");
    console.log(`word count: ${str}`);
    console.log(`${str.length}`);
    //string5=str.length;


    console.log(`divide: ${string2/str.length}`);
    console.log(`multiply: ${string2*str.length}`);
}
string();
