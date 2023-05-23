// Set initial game state
game = {
    score: {
        player: 0,
        computer: 0
    },
    roundsPlayed: 0,
    iterateRounds: function() {
        this.roundsPlayed += 1;
    },
    showCurrentScore: function() {
        console.table(this.score);
    },
    recordPlayerRoundWin: function() {
        this.score.player += 1;
    },
    recordComputerRoundWin: function() {
        this.score.computer +=1;
    }
}

while (game.score.player < 3 && game.score.computer < 3) {
    playRound();
}

console.log('Good game!');

function playRound() {
    // We hate have the variable declarations out here, but it is what it is
    let humanMove;
    let computerMove;
    
    // PlayerMove class will throw an error if you attempt to initiate with invalid input
    try {
        humanMove = new PlayerMove(getUserInput());
        computerMove = new PlayerMove(generateRandomMove());
    }
    catch (err) {
        console.log(err.message);
        return;
    }
    
    handleRoundOutcome(humanMove, computerMove);
    game.showCurrentScore();
}

function getUserInput() {
    return prompt('Enter your move (Rock, Paper, or Scissors');
}

function handleRoundOutcome (playerMove, computerMove) {
    game.iterateRounds();    

    // Give player summary of moves
    console.log(`Round ${game.roundsPlayed}: Player selected ${playerMove.displayValue}, Computer Selected ${computerMove.displayValue}.`);

    // Take acion based on current round outcome
    if (playerMove.ties(computerMove)) {
        console.log('Tie!');
    } else if (playerMove.beats(computerMove)) {
        console.log('Player wins!');
        game.recordPlayerRoundWin();
    } else if (computerMove.beats(playerMove)) {
        console.log('Computer Wins!');
        game.recordComputerRoundWin();
    } else {
        throw new Error('Error determining winner of current round');
    }
}