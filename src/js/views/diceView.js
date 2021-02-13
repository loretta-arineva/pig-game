import images from '../../img/*.png';

class Dice {
    _dice = document.querySelector(".dice");
    _btnRoll = document.querySelector(".btn--roll");
    _rndNum;

    render(num) {
        this._rndNum = num;
        this._diceMarkup(this._rndNum);

    }

    // Control dice roll
    addNewHandlerRoll(handler) {
        this._btnRoll.addEventListener("click", function () {
            handler();
        });
    }

    _roll(rndNum) {
        const dice = `dice-${rndNum}`;

        if (this._rndNum > 1) {
            // currentScore.textContent += rndNum;
        }

        if (this._rndNum === 1) {
            // currentScore.textContent = 0;
        }
        // Return source attribute
        return `.${images[dice]}`;
    }

    // Set dice src image
    _diceMarkup(num) {
        this._dice.setAttribute("src", this._roll(num));
    }

}

export default new Dice();