
// Function defintion for event listner under press function
// Function defintion for event listner under press function
// Function defintion for event listner under press function
let keyPress = (eve) => {
        let p = document.createElement("p");
        p.textContent = "The key which is pressed is: " + eve.key;
        console.log(p);
        recordcontainer.append(p);
    }

function press() {
    document.addEventListener("keydown", keyPress );
}

let recordcontainer = document.querySelector(".recordContainer")


// Function defintion for event listner under release function
// Function defintion for event listner under release function
// Function defintion for event listner under release function
let keyRelease = (eve) => {
        let p = document.createElement("p");
        p.textContent = "The key which is released is: " + eve.key;
        console.log(p);
        recordcontainer.append(p);
    }
function release() {
    document.addEventListener("keyup", keyRelease)
}



let starth = document.querySelector(".start");
let stoph = document.querySelector(".stop");
let statush = document.querySelector(".status");
// when start loggin button is cliked this will call press and release function which add event lister to keep record of keys
// when start loggin button is cliked this will call press and release function which add event lister to keep record of keys

starth.addEventListener("click" , ()=>{
    starth.disabled = true;
    statush.textContent = "Status : Logging" 
    press();
    release();
})



// when stop loggin button is cliked this will remove key down and up  event lister to stop the logging
// when stop loggin button is cliked this will remove key down and up  event lister to stop the logging
// when stop loggin button is cliked this will remove key down and up  event lister to stop the logging
stoph.addEventListener("click" , ()=>{
    document.removeEventListener("keydown" , keyPress);
    document.removeEventListener("keyup" , keyRelease);
    starth.disabled = false;
    statush.textContent = "Status : Not Logging" 
})


let clear = document.querySelector(".clear");

clear.addEventListener("click" , ()=>{
    recordcontainer.textContent = ""
    starth.disabled = false;
})
