scoreboard = {
    displayPlayerScore(score) {
        const playerScoreElement = document.querySelector('#playerScore');
        playerScoreElement.textContent = `Player Score: ${score}`;
    },
    displayComputerScore(score) {
        const playerScoreElement = document.querySelector('#computerScore');
        playerScoreElement.textContent = `Computer Score: ${score}`;
    },
    displayRound(round) {
        const roundDisplayElement = document.querySelector('#roundDisplay');
        roundDisplayElement.textContent = `Round: ${round}`;
    }
};

function appendToGameLog(message) {
    const gamelogElement = document.querySelector('#gamelog');
    const paraToAdd = document.createElement('p');
    paraToAdd.textContent = message;
    gamelogElement.appendChild(paraToAdd);
}

function clearGameLog() {
    const gamelogEntries = document.querySelectorAll('#gamelog>p');
    gamelogEntries.forEach(entry => {
        entry.remove();
    });
}

const buttons = document.querySelectorAll('.playerSelectButton');

buttons.forEach(button => {
    button.addEventListener('click', ele => {
        const audioElement = document.querySelector(`audio[data-sound="${button.getAttribute('data-sound')}"]`)
        audioElement.currentTime = 0;
        audioElement.play();
        playRound(button.textContent);
    });
});