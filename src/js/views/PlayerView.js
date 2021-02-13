class Player {
    _curPlayer;
    _curScore;
    _scoreTotal;
    _curScoreContainer;
    _totalScoreContainer;
    _data;

    _btnHold = document.querySelector(".btn--hold");
    _player1 = document.querySelector(".player--0");
    _player2 = document.querySelector(".player--1");

    render(data) {
        this._data = data;
        this._curPlayer = data.curPlayer();
        this._curScore = this._curPlayer.curScore;
        this._scoreTotal = this._curPlayer.totalScore;

        this._updateCurScore(data.randNum);
        // this._updateTotalScore(this._scoreTotal);
    }


    addHandlerHoldScore(handler) {
        this._btnHold.addEventListener("click", function () {
            handler();
        });
    }

    _updateTotalScore(totalScore) {
        const activePlayer = document.querySelector(".player--active");
        this._totalScoreContainer = activePlayer.querySelector(".score");
        
        this._totalScoreContainer.textContent = this._scoreTotal;
    }

    // Update current player's current score container
    _updateCurScore(score) {
        const activePlayer = document.querySelector(".player--active");
        this._curScoreContainer = activePlayer.querySelector(".current-score");
        this._curScoreContainer.textContent = this._curScore;
    }

    resetGame() {
        this._curScoreContainer.textContent = this._curScore;
        this._totalCtScores = document.querySelectorAll(".score");
        console.log(this._totalScoreContainer);
        this._data.players.forEach(element => {
            console.log(element.curScore);
        });
    }

    resetCurScore() {
        this._curScoreContainer.textContent = this._curScore;
        this._switchPlayerTurn();
    }

    _switchPlayerTurn() {
        this._player1.classList.toggle("player--active");
        this._player2.classList.toggle("player--active");
        this._curPlayer = document.querySelector(".player--active");
    }
}

export default new Player();