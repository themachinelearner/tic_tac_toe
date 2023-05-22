// Create set of valid movess
const VALID_MOVES = {
    rock: 'Rock',
    paper: 'Paper',
    scissors: 'Scissors'
};
Object.freeze(VALID_MOVES);

// Define a method to determine if one choice beats another
String.prototype.beats = function(secondInput) {
    if ((this.valueOf() === VALID_MOVES.rock && secondInput === VALID_MOVES.scissors) || 
        (this.valueOf() === VALID_MOVES.scissors && secondInput === VALID_MOVES.paper) ||
        (this.valueOf() === VALID_MOVES.paper && secondInput === VALID_MOVES.rock)) return true;
}

function generateRandomMove() {
    let randBetweenZeroAndTwo = Math.floor(Math.random() * 3);
    let randomKey = Object.keys(VALID_MOVES)[randBetweenZeroAndTwo];
    return VALID_MOVES[randomKey];
}