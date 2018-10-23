let program1=function(){
    console.log("This is Program 1!");
}
let program2 = function(){
    console.log("This is Program 2!");
}
let program3 = function(){
    console.log("This is Program 3!");
}
const startProgram = require("./startProgram");
startProgram.startProgram(15000,"Program 1",program1);
startProgram.startProgram(20000,"Program 2",program2);
startProgram.startProgram(10000,"Program 3",program3);