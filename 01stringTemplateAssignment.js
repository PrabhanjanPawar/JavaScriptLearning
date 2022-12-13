console.log(`This is String Template Assignment : 01`);
console.log(`****************************************\n`);
console.log("1)--------------------------------");
function stringTemplateAssig(){

    var string=(`   My dream Company is "CapGemini".`);
    console.log(string);
    console.log("2)--------------------------------");
    var myHobby1= "PlayingCricket";
    var myHobby2= "WatchingMovies";
    var myHobby3= "ListeningSongs";

    // console.log("My hobbies are : ",myHobby01);
    console.log(`   2.1) My Hobbies are : ${myHobby1} ${myHobby2} ${myHobby3}`);
    var concat=myHobby1+myHobby2+myHobby3;
    console.log(`   2.2) My Hobbies after Concatination using String Template : ${concat}`);
}
stringTemplateAssig();

// var myHobbies=function (){

//     var myHobby01= playingCricket;
//     var myHobby02= watchingMovies;
//     var myHobby03= ListeningSongs;

//     console.log(myHobby01,myHobby02,myHobby03);
// }
// myHobbies(` "Playing", "Watching", "Listening" `);