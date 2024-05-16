/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


/*---------------------------- Variables (state) ----------------------------*/

let board = [
    '', '', '', 
    '', '', '',
    '', '', '',
];
// represents the state of the squares on the board

let turn = 'X';
// track whose turn it is, X = player X and O = player O

let winner = false;
// false winner means that theres no winner yet and true represents a player has won

let tie = false;
//A true value in tie will mean that the board array contains no more empty strings ('') and will be used to render a tie message if winner is still false by the time all squares are played.


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
// console.log(squareEls);

const messageEl = document.querySelector('#message');
// console.log(messageEl);

const resetBtnEl = document.querySelector('.reset');





/*-------------------------------- Functions --------------------------------*/

const init = () => {
    board = [
        '', '', '', 
        '', '', '',
        '', '', '',
    ];
    turn = 'X';
    winner = false;
    tie = false;
    render();
};

const render = () => {
    updateBoard();
    updateMessage();
};

const updateBoard = () => {
    board.forEach((element, idx) => {
        const squareEl = squareEls[idx];
        squareEl.textContent = element;
    });
};

const updateMessage = () => {
    let render;
    if (winner === false && tie ===false) {
        render = `It is play ${turn}'s turn!`;
    } else if (winner === false || tie === true) {
        render = "Its's a tie!";
    } else {
        render = `Player ${turn} is the WINNER!`;
    }

    messageEl.textContent = render;
};

const handleClick = (event) => {
    const squareIndex = event.target.id
    if (board[squareIndex] === "X" || board[squareIndex] === "O") return
    if (winner === true) return
    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
    // updateMessage()
};


const placePiece = (index) => {
    if (turn === 'X') {
        board[index] = 'X';
        // turn = 'O';
    } else {
        board[index] = 'O';
        // turn = 'X';
    }
    console.log(board[index]);
    // updateBoard();
};

const checkForWinner = () => {
    winningCombos.forEach((win) => {
        if (board[win[0]] != '' 
        && board[win[0]] === board[win[1]] 
        && board[win[1]] === board[win[2]]) {
           winner = true 
        }
    })
};

const checkForTie = () => {
    if (winner == true) return;
    if (board.includes('')) {
        tie = false;
    } else {
        tie = true;
    }
}

const switchPlayerTurn = () => {
    if(winner == true) return
    if (winner == false && turn == 'X') {
        turn = 'O'
    } else if (winner == false && turn == "O") {
        turn = 'X'
    }
}



init();



/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) =>{
    square.addEventListener('click', handleClick);
});

resetBtnEl.addEventListener('click', init);




