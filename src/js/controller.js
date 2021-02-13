import dice from "./views/diceView.js";
import * as model from "./model.js";
import playerView from "./views/PlayerView.js";
import gameplay from "./views/gameplayView.js"
import "core-js/stable";
import "regenerator-runtime/runtime";


const scoreTotal = Array.from(document.querySelectorAll(".score"));
const currentScore = Array.from(document.querySelectorAll(".current-score"));
const btnNew = document.querySelector(".btn--new");
const curPlayer = document.querySelector(".player--active");

const controlNewGame = function () {
    model.newGame();
    playerView.render(model.state);
    playerView.resetGame();
    dice.render(model.state.randNum);
}

const controlDiceRoll = async function () {
    try {
        // Roll dice with random number from model
        dice.render(model.randomNum());
        console.log(model.state.initPlayer());
        console.log(model.state.curPlayer());
        console.log(model.state.winner());
        // If dice is 1
        if (model.state.randNum === 1) {
            console.log("You lost your score");
            // Reset current score
            model.state.curPlayer().curScore = 0;
            // Next player starts from 0
            model.state.randNum = 0;

            // Update player view data
            playerView.render(model.state);

            // Switch player turn
            playerView.resetCurScore();
           // model.state.initPlayer();
        }

        model.updatePlayerScore();
        playerView.render(model.state);
    } catch (error) {
        console.log(error);
    }
}

const controlHoldScore = function () {
    // Save current score to total score
    model.holdScore();
    // Update data
    playerView.render(model.state);
    // Render total score markup
    playerView._updateTotalScore(model.state.curPlayer().curScore);

    // If game was won
    if (controlWinGame()) {
        gameplay.renderWinner(model.state);
    }
    
    // IMPORTANT, must come after winner checkup
    // Nullify current score visual and switch players
    playerView.resetCurScore();
    
}

const controlPlayAgain = function () {
    gameplay.renderNewGame();
}
const controlWinGame = function () {
    return gameplay.win(model.state);
}

const init = function () {
    dice.addNewHandlerRoll(controlDiceRoll);
    playerView.addHandlerHoldScore(controlHoldScore);
    // gameplay.addHandlerPlayAgain(controlPlayAgain);
    gameplay.addHandlerNewGame(controlNewGame);
}

init();
