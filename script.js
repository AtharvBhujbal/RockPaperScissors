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
const player_score=document.querySelector('.player_score');
const computer_score=document.querySelector('.computer_score');
let computercounter=computer_score.textContent;
let playercounter=player_score.textContent;
const body=document.querySelector('.body');
const round_result=document.querySelector('.round_result');
function playRound(playerSelection, ComputerChoice) {
    if(playercounter<5 && computercounter<5){
        if(playerSelection===ComputerChoice){
            round_result.textContent="Tie,Both Player entered the same sign";
        }
        else if(playerSelection==="rock"){
            if(ComputerChoice==="paper"){
                round_result.textContent="Paper Won!!,You Lost";
                computercounter++;
            }
            else{
                round_result.textContent="Rock Won!!,Computer Lost";
                playercounter++; 
            }
        }
        else if(playerSelection==="paper"){
            if(ComputerChoice==="rock"){
                round_result.textContent="Paper Won!!,Computer Lost";
                playercounter++;
            }
            else{
                round_result.textContent="Scissors Won!!,You Lost";
                computercounter++;
            }
        }
        else if(playerSelection==="scissors"){
            if(ComputerChoice==="rock"){
                round_result.textContent="Rock Won!!,You Lost";
                computercounter++;
            }
            else{
                round_result.textContent="Scissors Won!!,Computer Lost";
                playercounter++;
            }
        }
        player_score.textContent=playercounter;
        computer_score.textContent=computercounter;
    }
    else{
        winner(); 
    }
     
}
function winner(){  
    if(playercounter>computercounter){
        body.textContent="Congratulation!!,You have won the game";
    }
    else if(playercounter==computercounter){
        body.textContent="The game ended in a tie,Please Refresh to play again";
    }
    else{
        body.textContent="Game Lost,Please Refresh to play again";
    }
    body.setAttribute('style','font-size:60px')
}


