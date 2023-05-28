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
        const allButtons = document.querySelectorAll('.playerSelectButton');
        allButtons.forEach(buttonInner => {
            if (button !== buttonInner) {
                buttonInner.classList.add('deselected');
            }
        });

        button.classList.add('selected');

        playRound(button.textContent);
    });

    button.addEventListener('transitionend', () => {
        if (button.classList.contains('deselected')) {
            button.style.visibility = 'hidden';
        }
    });
});