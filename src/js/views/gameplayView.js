import { WINNING_NUMBER } from "../config.js";

class Gameplay {
    _btnNew = document.querySelector(".btn--new");
    _curPlayer;
    _gameContainer = document.querySelector("main");
    _btnPlayAgain;

    renderWinner(data) {
        // Get player number
        const winner = Object.keys(data.winner()).join('').slice(-1);

        // Generate winner markup
        const markup = this._generateWinnerMarkup(winner);
        this._insertMarkup(markup);
    }

    _insertMarkup(markup) {
        this.clear(this._gameContainer);
        this._gameContainer.insertAdjacentHTML("afterbegin", markup);
    }

    renderNewGame() {
        const markup = this._generateGameMarkup();
        this._insertMarkup(markup);
    }

    addHandlerNewGame(handler) {
        this._btnNew.addEventListener("click", function () {
            handler();
        });
    }

    addHandlerPlayAgain() {
        this._btnPlayAgain = document.querySelector(".btn-play-again");
        this._btnPlayAgain.addEventListener("click", function () {
            handler();
        });
    }

    win(data) {
        this._curPlayer = data.curPlayer();
        if (this._curPlayer.totalScore >= WINNING_NUMBER) {
            return true;
        } else {
            return false;
        }
    }

    _generateGameMarkup() {
        const markup = `
            <section class="player player--0 player--active">
                <h2 class="name" id="name--0">Player 1</h2>
                <p class="score" id="score--0">0</p>
                <div class="current">
                <p class="current-label">Current</p>
                <p class="current-score" id="current--0">0</p>
                </div>
                <img src="./src/img/dice-6.png" alt="Playing dice" class="dice" />
                <button class="btn btn--new">🔄 New game</button>
                <button class="btn btn--roll">🎲 Roll dice</button>
                <button class="btn btn--hold">📥 Hold</button>
            </section>
            <section class="player player--1">
                <h2 class="name" id="name--1">Player 2</h2>
                <p class="score" id="score--1">0</p>
                <div class="current">
                <p class="current-label">Current</p>
                <p class="current-score" id="current--1">0</p>
                </div>
            </section>
        `
    }

    _generateWinnerMarkup(winner) {
        const markup = ` 
            <section class="winner-container">
                <h1>Congratulations Player ${winner}, you win!</h1>
                <p>You reached <span class="points">${WINNING_NUMBER}</span> points! 🎈🎈🎈</p>
                <button class="btn-play-again">Next Round?</button>
            </section>
        `
        return markup;
    }
    clear(container) {
        container.innerHTML = "";
    }
}

export default new Gameplay();