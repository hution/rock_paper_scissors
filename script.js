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
            updateScore("t");
            return "Tie! Rock ties rock"
        } else if (computerSelection.toLowerCase() == "paper"){
            updateScore("l");
            return "Lose! Paper beats Rock"
        } else if (computerSelection.toLowerCase() == "scissors"){
            updateScore("w");
            return "Win! Rock beats Scissors"
        }

    }

    if (playerSelection.toLowerCase() == "paper")
    {
        if(computerSelection.toLowerCase() == "paper"){
            updateScore("t");
            return "Tie! Paper ties paper"
        } else if (computerSelection.toLowerCase() == "scissors"){
            updateScore("l");
            return "Lose! Scissors beats Paper"
        } else if (computerSelection.toLowerCase() == "rock"){
            updateScore("w");
            return "Win! Paper beats Rock"
        }

    }

    if (playerSelection.toLowerCase() == "scissors")
    {
        if(computerSelection.toLowerCase() == "paper"){
            updateScore("w");
            return "Win! Scissors beat Paper"
        } else if (computerSelection.toLowerCase() == "scissors"){
            updateScore("t");
            return "Tie! Scissors tie scissors"
        } else if (computerSelection.toLowerCase() == "rock"){
            updateScore("l");
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

function updateScore(result){
    let curPlayerScore = document.querySelector("#divPlayerScore").textContent;
    let curComputerScore = document.querySelector("#divComputerScore").textContent;
    
    curPlayerScore = curPlayerScore.slice(-1);
    curPlayerScore = Number(curPlayerScore);
    curComputerScore = curComputerScore.slice(-1);
    curComputerScore = Number(curComputerScore);

    switch(result){
        case "w":
            if(curPlayerScore+1==5){
                document.querySelector("#divPlayerScore").textContent = "Player Score: 0";
                document.querySelector("#divComputerScore").textContent = "Computer Score: 0";
                alert("You Won! Game Over!");
        
            } else {
                newPlayerScore = curPlayerScore + 1;
                document.querySelector("#divPlayerScore").textContent = "Player Score: " + newPlayerScore;
            }
            break;
        case "l":
            if(curComputerScore+1==5){
                document.querySelector("#divComputerScore").textContent = "Computer Score: 0";
                document.querySelector("#divPlayerScore").textContent = "Player Score: 0";
                alert("The Computer Won! Game Over!");
        
            } else {
                newComputerScore = curComputerScore + 1;
                document.querySelector("#divComputerScore").textContent = "Computer Score: " + newComputerScore;
            }
            break;
    }



    
    
}

function game(){
    let playerSelection
    let computerChoice
    let rounds = 0
    var score = 0

    const divPlayerScore = document.createElement('div');
    const divComputerScore = document.createElement('div');
    const container = document.querySelector('#container');

    divPlayerScore.setAttribute('id','divPlayerScore');
    divComputerScore.setAttribute('id','divComputerScore');

    divPlayerScore.textContent="Player Score: " + score;
    divComputerScore.textContent="Computer Score: " + score;
    container.appendChild(divPlayerScore);
    container.appendChild(divComputerScore);
    

    // while (rounds < 5)
    // {
    //     playerSelection = prompt("Choose Rock, Paper, or Scissors:")
    //     computerChoice = getComputerChoice()
    //     console.log(playRound(playerSelection,computerChoice))
    //     rounds++
    // }
}

