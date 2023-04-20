//Variable Declared Globally So Every Function Has Access to it
let computercounter=0;
let playercounter=0;
function getComputerChoice(){
    const array=["rock","paper","scissors"]
    const index=Math.floor(Math.random()*array.length);
    const ComputerChoice=array[index];
    return ComputerChoice;
}
function playRound(playerSelection, computerSelection) {
    if(playerSelection===computerSelection){
        alert("Tie,Both Player entered the same sign")
    }
    else if(playerSelection==="rock"){
        if(computerSelection==="paper"){
            alert("Paper Won!!,You Lost")
            computercounter++;
        }
        else{
            alert("Rock Won!!,Computer Lost")
            playercounter++; 
        }
    }
    else if(playerSelection==="paper"){
        if(computerSelection==="rock"){
            alert("Paper Won!!,Computer Lost")
            playercounter++;
        }
        else{
            alert("Scissors Won!!,You Lost")
            computercounter++;
        }
    }
    else if(playerSelection==="scissors"){
        if(computerSelection==="rock"){
            alert("Rock Won!!,You Lost")
            computercounter++;
        }
        else{
            alert("Scissors Won!!,Computer Lost")
            playercounter++;
        }
    }
}
function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection=prompt("Please Enter Your choice from Rock,Paper,Scissors")
        playerSelection=playerSelection.toLowerCase();
        if(playerSelection==="rock"||"scissors"||"paper"){
            alert("Please Enter a Valid Choice")
        }
        else{
            playRound(playerSelection, computerSelection)
        }
    }
    if(playercounter>computercounter){
        alert("Congratulation!!,You have won the game")
    }
    else{
        alert("Game Lost")
    }
}