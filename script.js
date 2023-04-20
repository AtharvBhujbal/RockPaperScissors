function getComputerChoice(){
    const array=["rock","paper","scissors"]
    const index=Math.floor(Math.random()*array.length);
    const ComputerChoice=array[index];
    return ComputerChoice;
}
function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    if(playerSelection===computerSelection){
        console.log("Tie,Both Player entered the same sign")
    }
    else if(playerSelection==="rock"){
        if(computerSelection==="paper"){
            console.log("Paper Won!!,You Lost")
        }
        else{
            console.log("Rock Won!!,Computer Lost") 
        }
    }
    else if(playerSelection==="paper"){
        if(computerSelection==="rock"){
            console.log("Paper Won!!,Computer Lost")
        }
        else{
            console.log("Scissors Won!!,You Lost")
        }
    }
    else if(playerSelection==="scissors"){
        if(computerSelection==="rock"){
            console.log("Rock Won!!,You Lost")
        }
        else{
            console.log("Scissors Won!!,Computer Lost")
        }
    }
}