class PlayerMove {
    constructor (val) {
        if (!this.isValidMove(val)) {
            throw new Error('Attempted to create a move instance based on invalid value');
        }
        this.rawValue = val;
        this.displayValue = VALID_MOVES[val.toLowerCase()];
    }

    // Determine if one choice beats another
    beats (secondInput) {
        if ((this.displayValue === VALID_MOVES.rock && secondInput.displayValue === VALID_MOVES.scissors) || 
            (this.displayValue === VALID_MOVES.scissors && secondInput.displayValue === VALID_MOVES.paper) ||
            (this.displayValue === VALID_MOVES.paper && secondInput.displayValue === VALID_MOVES.rock)) return true;
    }   

    ties (secondInput) {
        return this.displayValue === secondInput.displayValue;
    }

    isValidMove(val = this.value) {
        return (VALID_MOVES.hasOwnProperty(val.toLowerCase()) && val);
    }
}