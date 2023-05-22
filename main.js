// Take user input
let userInput = prompt('Enter your move (Rock, Paper, or Scissors');

// Validate user input
if (!userInput) {
    throw  new Error('Invalid user input');
}

// Format user input
let playerMove = userInput.slice(0,1).toUpperCase() + userInput.slice(1).toLowerCase();

// Validate user input against valid choices
if (!Object.values(VALID_MOVES).includes(playerMove)) {
    throw  new Error('Invalid user input - user input does not match list of valid moves');
}

// Generate computer input
 let computerMove = generateRandomMove();

// Determine round outcome
let currentRoundOutcome;
console.log(`Player selected ${playerMove}, Computer Selected ${computerMove}.`);
if (playerMove === computerMove) {
    console.log('Tie!');
} else if (playerMove.beats(computerMove)) {
    console.log('Player wins!');
} else if (computerMove.beats(playerMove)) {
    console.log('Computer Wins!');
} else throw new Error('Error determining winner of current round');


// Present outcome to user



// Update score

// Begin a new round or present final scores