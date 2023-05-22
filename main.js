// Set initial game state
game = {
    score: {
        player: 0,
        computer: 0
    },
    roundsPlayed: 0
}

while (game.score.player < 3 && game.score.computer < 3) {
    playRound();
}

console.log('Good game!');

function playRound() {
    // Take user input
    let userInput = prompt('Enter your move (Rock, Paper, or Scissors');

    // Validate user input
    if (!userInput) {
        console.log('Invalid user input');
        return;
    }

    // Format user input
    let playerMove = userInput.slice(0,1).toUpperCase() + userInput.slice(1).toLowerCase();

    // Validate user input against valid choices
    if (!Object.values(VALID_MOVES).includes(playerMove)) {
        console.log('Invalid move by player');
        return;
    }

    // Generate computer input
    let computerMove = generateRandomMove();

    // Iterate rounds played
    game.roundsPlayed = game.roundsPlayed + 1;

    // Give player summary of moves
    console.log(`Round ${game.roundsPlayed}: Player selected ${playerMove}, Computer Selected ${computerMove}.`);

    // Take acion based on current round outcome
    if (playerMove === computerMove) {
        console.log('Tie!');
    } else if (playerMove.beats(computerMove)) {
        console.log('Player wins!');
        game.score.player = game.score.player + 1;
    } else if (computerMove.beats(playerMove)) {
        console.log('Computer Wins!');
        game.score.computer = game.score.computer + 1;
    } else throw new Error('Error determining winner of current round');


    // Present outcome to user
    console.table(game.score);
}

