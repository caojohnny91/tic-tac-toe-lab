/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/

let board;
// represents the state of the squares on the board

let turn;
// track whose turn it is, X = player X and O = player O

let winner;
// false winner means that theres no winner yet and true represents a player has won

let tie;
//A true value in tie will mean that the board array contains no more empty strings ('') and will be used to render a tie message if winner is still false by the time all squares are played.


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
// console.log(squareEls);

const messageEl = document.querySelector('#message');
// console.log(messageEl);







/*-------------------------------- Functions --------------------------------*/

const init = () => {
    // initialisation stuff here
    board = [
        '', '', '', 
        '', '', '',
        '', '', '',
    ];
    turn = 'X';
    winner = false;
    tie = false;
}

const render = () => {
    updateBoard();
    updateMessage();
}

const updateBoard = () => {
    board.forEach((element, idx) => {
        const squareEl = squareEls[idx]; // QUESTION did I do this right?
        squareEl.textContent = element;
        // if (value === 'X') {
        //     squareEl.style.backgroundColor = 'black';
        //     squareEl.style.color = 'white';
        // } else if (value === 'O') {
        //     squareEl.style.backgroundColor = 'black';
        //     squareEl.style.color = 'red';
        // } else {
        //     squareEl.style.backgroundColor = 'white';
        //     squareEl.style.color = 'black';
        // }
    });
}

const updateMessage = () => {
    let render;
    if (winner === false && value ===false) {
        render = `It is play ${turn}'s turn!`;
    } else if (winner === false || tie === true) {
        render = "Its's a tie!";
    } else {
        render = `Player ${turn} is the WINNER!`;
    }
} // QUESTION do I need () after turn, tie, and winner?


render();

init(); // QUESTION need to call when app loads












/*----------------------------- Event Listeners -----------------------------*/



