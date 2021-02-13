# Pig Game

Pig is a simple dice game first described in print by John Scarne in 1945. Players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.

## Installation 
1. Clone repository - Go ahead and clone the repository.
2. Install packages 
    * `npm install`
3. Run program
    * `npm start` - Server available at http://localhost:1234 by default.
4. Have fun!


## About this game
I built this game for fun and to practice the MVC architecture. You can play the game, but keep in mind that the game is still in development and lacks some features.

### Stack and methodology used
* Stack
    1. Vanilla JS
    2. HMTL
    3. CSS

* Methodologies
    1. MVC (Model-View-Controller) Architecture
    2. Model Bundling with *parcel*
    3. Older browser support 
        * Regenerator runtime
        * Core-JS
    4. Responsive Design - Mobile friendly!
        

### Features in progress:
1. Play Again
2. New Game

> If you wish to play again you can reload the browser until the features are implemented.

## Gameplay

1. **Roll Dice:** Roll the dice as many times as you wish
    * **Roll Dice** will roll a random 6 sided dice. Each time you roll the dice score will be added to your current score (Unless you land 1).
    * ***If you land 1:*** Your current score will be nullified and the next player takes turn.
2. **Hold**
    * **Hold**: Hold will add your current score to your total score. The current score will be nullified and then the next player takes turn.
3. **Winner** 
    * The game goes on until one of the players reaches 100 points.
    * You can choose to start the game again if you desire.
4. **New Game**
    * Resets the game.
 
 ## Author
 * Loreta Krasteva