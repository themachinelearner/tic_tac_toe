// Set initial game state
game = {
    score: {
        player: 0,
        computer: 0
    },
    WINNING_SCORE: 3,
    roundsPlayed: 0,
    iterateRounds: function() {
        this.roundsPlayed += 1;
        scoreboard.displayRound(this.roundsPlayed);
    },
    showCurrentScore() {
        scoreboard.displayPlayerScore(this.score.player);
        scoreboard.displayComputerScore(this.score.computer);
    },
    recordPlayerRoundWin() {
        this.score.player += 1;
    },
    recordComputerRoundWin() {
        this.score.computer +=1;
    },
    isOver() {
        return this.score.player === WINNING_SCORE || this.score.computer === WINNING_SCORE;
    },
    handleEndGame() {
        if (this.score.player > this.score.computer) {
            appendToGameLog('Player wins!!');
        } else {
            appendToGameLog('Computer Wins!!');
        }
        setTimeout(() => {
            clearGameLog();
            this.score.player = 0;
            this.score.computer = 0;
            this.roundsPlayed = 0;
            },
            2000
        );
    }
}

function playRound(userInput) {
    // We hate have the variable declarations out here, but it is what it is
    let humanMove;
    let computerMove;
    
    // PlayerMove class will throw an error if you attempt to initiate with invalid input
    try {
        humanMove = new PlayerMove(userInput);
        computerMove = new PlayerMove(generateRandomMove());
    }
    catch (err) {
        console.log(err.message);
        return;
    }
    
    handleRoundOutcome(humanMove, computerMove);
    game.showCurrentScore();
}

function handleRoundOutcome (playerMove, computerMove) {
    game.iterateRounds();    

    // Give player summary of moves
    appendToGameLog(`Round ${game.roundsPlayed}: Player selected ${playerMove.displayValue}, Computer Selected ${computerMove.displayValue}.`);

    // Take acion based on current round outcome
    if (playerMove.ties(computerMove)) {
        appendToGameLog('Tie!');
    } else if (playerMove.beats(computerMove)) {
        appendToGameLog('Player wins!');
        game.recordPlayerRoundWin();
    } else if (computerMove.beats(playerMove)) {
        appendToGameLog('Computer Wins!');
        game.recordComputerRoundWin();
    } else {
        throw new Error('Error determining winner of current round');
    }
    if (game.isOver) {
        game.handleEndGame();
    }
}