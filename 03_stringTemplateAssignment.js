console.log(`==========This is String Template Assignment : 03=========\n`);
console.log(`1)----------------------------------------------------------\n`);

function squareOfWordLength(string){

    var lengthOfWord=string.length;
    console.log(`    "Length" of the "${string}" is :" ${lengthOfWord} " and Square of "Length" is :"${lengthOfWord*lengthOfWord} " \n`);

}
squareOfWordLength("JavaScript");
squareOfWordLength(`Google Chrome`);
squareOfWordLength("Developer Smart");

console.log(`2)----------------------------------------------------------\n`);

var length = function (){

    var string1="I am Angular Developer";
    var stringWord=string1.split(" ");
    var wordCount=stringWord.length;
    console.log(`  2.1)"Length" of the String "${string1}" is:"${string1.length}" and the String Divided by Total no of Words is:"${string1.length/wordCount}"\n`); 
    // console.log(`    ${string1.length/wordCount}`);
    
    console.log(`  2.1)"Length" of the String "${string1}" is:"${string1.length}" and the String Multiply by Total no of Words is:"${string1.length*wordCount}"`); 
}
length();
