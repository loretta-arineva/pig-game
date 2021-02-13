export const state = {
    players: [
           { 
               player1: {
                curScore: 0,
                totalScore: 0
            }
        },
           { 
               player2: {
                curScore: 0,
                totalScore: 0
            }
        }
    ],
    initPlayer() {
        return document.querySelector(".player--active");
    },
    curPlayer() {
        const active = this.initPlayer();

        if(active.classList.contains("player--0")){
            return this.players[0].player1;
        } else {
            return this.players[1].player2;
        }
    },
    winner() {
        const active = this.initPlayer();

        if(active.classList.contains("player--0")){
            return this.players[0];
        } else {
            return this.players[1];
        }
    },
    randNum: 0
}

export const randomNum = function () {
    state.randNum = Math.trunc((Math.random() * 6) + 1);
    return state.randNum;
}
// Automatically determine players by selecting them in view
export const playerCount = function (players) {
    
}

export const updatePlayerScore = function () {
    const player = state.curPlayer();
    player.curScore += state.randNum;
}

export const holdScore = function() {
    const player = state.curPlayer();
    player.totalScore += player.curScore;
    player.curScore = 0;
}

export const newGame = function () {
    state.randNum = 6;
    state.players.forEach(player => {
        player.curScore = 0;
        player.totalScore = 0
    });
}