let startProgram = function(waitTime,programName,program){
    console.log("*** Starting "+programName+" in "+waitTime/1000+" seconds. ***");
    let timer = setInterval(()=>{
        console.log("*** Starting "+ programName +" ***");
    }, waitTime);
    setTimeout(() => {
        clearInterval(timer);
        program();
    },waitTime + 100);

}
module.exports.startProgram = startProgram;