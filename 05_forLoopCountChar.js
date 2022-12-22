console.log(`" This Assignment is for to Count "A" or "a" in the given string"`);
console.log(`-----------------------------------------------------------------`);

function countCharA(string1) {
    
    var counter=0;
    for (let index = 0; index < string1.length; index++) {
        
        var char=string1.charAt(index);
        if (char=="A" || char=="a") {
           // console.log(char);
            counter=counter+1;
            }
        
    }
    console.log(`The given string is : "${string1}"`);
    console.log(`Total Count of "A" & "a" in the given string is : ${counter}\n`);
}
countCharA("I AM Learning JavaScript, The Language of interenet");
countCharA("My favourite movie is LAggAn");
