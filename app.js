const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    return {board}
})();

//Factory Function: Creates players
const player = (name, symbol) => {
    return {name,symbol}
}

const playerOne = player('Player One', 'X');
const playerTwo = player('Player Two', 'O');

//plays game and checks winner 
const playGame = (() =>{
    const {board} = gameBoard;
   
    let symbol = ''; 
    let winningPlayer = '';
    winner.textContent= `It's player One's turn`
    winner.style.color='yellow';
    winner.style.fontSize='30px'
     //when spot it clicked push player's marker to the corrospsong box position in the array 
    const placeMark = (e) => { 
         //sets the board square to the corrosponding array index
        const number = board[`${e.target.id}`]; 
        //switches between players and places a mark
        if (symbol === '') {
            symbol = playerOne.symbol;  
            winner.textContent= `It's player Two's turn`
            if (number === '') {board.splice(`${e.target.id}`,1, symbol)}; 
        }else if (symbol === playerOne.symbol) {
            symbol = playerTwo.symbol; 
            winningPlayer = playerTwo.name;
            winner.textContent= `It's player One's turn`
            if (number === '') {board.splice(`${e.target.id}`,1, symbol)}; 
        }else if (symbol === playerTwo.symbol) {
            symbol = playerOne.symbol;
            winningPlayer = playerOne.name;
            winner.textContent= `It's player Two's turn`
            if (number === '') {board.splice(`${e.target.id}`,1, symbol)}; 
        }
        const {renderMoves} = renderAndRest;
        renderMoves();
        checkWhoWon();
    }
    
    function checkWhoWon() {
        if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;} 
        if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;} 
        if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {removeClick(); winner.textContent= `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {winner.textContent = "DRAW!"};
    }
    const cell = Array.from(document.getElementsByClassName('content'));
    //removes click event listener when cell is marked 
    function removeClick() {
        cell.forEach((box) => box.removeEventListener('click', placeMark)); 
    }

    //event listener for clicking on a cell
    function addClick() {
        cell.forEach((box) => box.addEventListener('click', placeMark));
    }
    addClick();

    return {addClick}
})();


//Renders move & Reset button functionality 
const renderAndRest = (() => {
    const {board} = gameBoard;
    const {addClick} = playGame;

    function renderMoves() {
        //Loop through every item  in board[] and push array value to corrosponding dom square
        for (let i=0; i<board.length; i++){
            const targetBox = document.getElementById(`${i}`);
            targetBox.textContent = board[i]; 
        }
    }
   
    const resetBtn = document.getElementById('resetBtn');

    resetBtn.addEventListener('click', () => {
        for (let i=0; i<board.length; i++){
            board[i] = '';
        }
        winner.textContent = 'Game has been reset';
        addClick();
        renderMoves();
    });

    return {renderMoves}
})();