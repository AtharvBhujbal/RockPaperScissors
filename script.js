function getComputerChoice(){
    const array=["rock","paper","scissors"]
    const index=Math.floor(Math.random()*array.length);
    const ComputerChoice=array[index];
    return ComputerChoice;
}
function playRound(playerSelection, computerSelection) {
    let computercounter=0;
    let playercounter=0;
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
}