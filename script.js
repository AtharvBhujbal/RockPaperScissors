// //Variable Declared Globally So Every Function Has Access to it
// function game(){
//     for (let i = 0; i < 5; i++) {
//         let ComputerChoice=getComputerChoice();
//         let playerSelection=getplayerSelection();
//         if(playerSelection==="rock"||playerSelection==="scissors"||playerSelection==="paper"){
//             playRound(playerSelection, ComputerChoice);
//         }
//         else{
//             alert("Please Enter a Valid Choice");
//         }
//     }
//     if(playercounter>computercounter){
//         alert("Congratulation!!,You have won the game with ${playercounter - computercounter} points");
//     }
//     else if(playercounter==computercounter){
//         alert("The game ended in a tie,Please Refresh to play again");
//     }
//     else{
//         alert("Game Lost,Please Refresh to play again");
//     }
// }
// game()  



const rock=document.querySelector('.rock');
const paper=document.querySelector('.paper');
const scissors=document.querySelector('.scissors');
paper.addEventListener('click',getplayerselection);
scissors.addEventListener('click',getplayerselection);
rock.addEventListener('click',getplayerselection);
function getplayerselection(e){
    let playerSelection=this.classList.value;
    let ComputerChoice=getComputerChoice();
    playRound(playerSelection,ComputerChoice);
}
function getComputerChoice(){
    const array=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*array.length);
    const ComputerChoice=array[index];
    return ComputerChoice;
}
let computercounter=0;
let playercounter=0;
function playRound(playerSelection, ComputerChoice) {
    if(playerSelection===ComputerChoice){
        alert("Tie,Both Player entered the same sign");
    }
    else if(playerSelection==="rock"){
        if(ComputerChoice==="paper"){
            alert("Paper Won!!,You Lost");
            computercounter++;
        }
        else{
            alert("Rock Won!!,Computer Lost");
            playercounter++; 
        }
    }
    else if(playerSelection==="paper"){
        if(ComputerChoice==="rock"){
            alert("Paper Won!!,Computer Lost");
            playercounter++;
        }
        else{
            alert("Scissors Won!!,You Lost");
            computercounter++;
        }
    }
    else if(playerSelection==="scissors"){
        if(ComputerChoice==="rock"){
            alert("Rock Won!!,You Lost");
            computercounter++;
        }
        else{
            alert("Scissors Won!!,Computer Lost");
            playercounter++;
        }
    }
}