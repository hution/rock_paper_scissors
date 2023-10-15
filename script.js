game();
function getComputerChoice(){
    // Randomly returns either Rock, Paper, or Scissors
    let randNum = Math.floor(Math.random() * 3)

    if(randNum==0){
        return "Rock"
    } else if(randNum==1) {
        return "Paper"
    } else if(randNum==2) {
        return "Scissors"
    } else {
        console.log('Something went wrong with the random thing')
    }

}

function playRound(playerSelection, computerSelection){
    // Take two parameters and return a string that declares the winner
    if (playerSelection.toLowerCase() == "rock")
    {
        if(computerSelection.toLowerCase() == "rock"){

            return "Tie! Rock ties rock"
        } else if (computerSelection.toLowerCase() == "paper"){
            return "Lose! Paper beats Rock"
        } else if (computerSelection.toLowerCase() == "scissors"){
            updateScore();
            return "Win! Rock beats Scissors"
        }

    }

    if (playerSelection.toLowerCase() == "paper")
    {
        if(computerSelection.toLowerCase() == "paper"){
            return "Tie! Paper ties paper"
        } else if (computerSelection.toLowerCase() == "scissors"){
            return "Lose! Scissors beats Paper"
        } else if (computerSelection.toLowerCase() == "rock"){
            updateScore();
            return "Win! Paper beats Rock"
        }

    }

    if (playerSelection.toLowerCase() == "scissors")
    {
        if(computerSelection.toLowerCase() == "paper"){
            updateScore();
            return "Win! Scissors beat Paper"
        } else if (computerSelection.toLowerCase() == "scissors"){
            return "Tie! Scissors tie scissors"
        } else if (computerSelection.toLowerCase() == "rock"){
            return "Lose! Rock beats Scissors"
        }

    }
}

const btn = document.querySelectorAll('.btn');

btn.forEach((button) => {
    button.addEventListener('click', function (e){
        console.log(e);
        switch(e.target){
            case rock:
                console.log(playRound("rock",getComputerChoice()));

                break;
            case paper:
                console.log(playRound("paper",getComputerChoice()));
                break;
            case scissors:
                console.log(playRound("scissors",getComputerChoice()));
                break;
            default:
                console.log("bad choice")
                break;
        }
    });
});

function updateScore(){
    let curScore = document.querySelector("#container > div").textContent;
    curScore = Number(curScore.slice(-1));
    if(curScore+1==5){
        console.log("Win- Game Over");
    } else {
        newScore = Number(curScore.slice(-1)) + 1;
        document.querySelector("#container > div").textContent = "Score: " + newScore;
    }
    
    
}

function game(){
    let playerSelection
    let computerChoice
    let rounds = 0
    var score = 0

    const divScore = document.createElement('div');
    const container = document.querySelector('#container');

    divScore.textContent="Score: " + score;
    container.appendChild(divScore);
    

    // while (rounds < 5)
    // {
    //     playerSelection = prompt("Choose Rock, Paper, or Scissors:")
    //     computerChoice = getComputerChoice()
    //     console.log(playRound(playerSelection,computerChoice))
    //     rounds++
    // }
}

