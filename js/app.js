/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board = ['', '', '', '', '', '', '', '', ''];
// represents the state of the squares on the board

let turn = x;
// track whose turn it is, x = player x and o = player o

let winner = false;
// false winner means that theres no winner yet and true represents a player has won

let tie = false;
//A true value in tie will mean that the board array contains no more empty strings ('') and will be used to render a tie message if winner is still false by the time all squares are played.


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
// console.log(squareEls);

const messageEl = document.querySelector('#message');
// console.log(messageEl);

















/*-------------------------------- Functions --------------------------------*/

function init () {
    // initialisation stuff here
}

init();

render();













/*----------------------------- Event Listeners -----------------------------*/



