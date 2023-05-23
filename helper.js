// Create set of valid movess
const VALID_MOVES = {
    rock: 'Rock',
    paper: 'Paper',
    scissors: 'Scissors'
};
Object.freeze(VALID_MOVES);

function generateRandomMove() {
    let randBetweenZeroAndTwo = Math.floor(Math.random() * 3);
    let randomKey = Object.keys(VALID_MOVES)[randBetweenZeroAndTwo];
    return VALID_MOVES[randomKey];
}