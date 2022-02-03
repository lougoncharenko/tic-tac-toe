
//create a player construtor
function Player(name, marker){
    this.name=name;
    this.marker=marker;
}

const playerOne = new Player('Player One', 'X');
const playerTwo =new Player ('Player Two', 'O');

//create a module for the game board
const game = (function(){
    const gameStatus= document.getElementById('game-status')
    let gameActive=true;
    let currentPlayer=playerOne;
    let gameBoard= ["","","","","","","","",""]; 

    const winningMessage = () => `${currentPlayer} wins!`
    const tieMessage = "It's a tie";
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
    // gameStatusMessage.innerText = currentPlayerTurn();

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
  

      //function from addEvent listener on cell
      function cellClick(e){
          const clickedCell =e.target;
          const number= parseInt(clickedCell.getAttribute('data-key'));
          console.log(number);
      }
    return {cellClick};
})();

document.querySelectorAll('.content').forEach(cell => cell.addEventListener('click', game.cellClick)); 


// function gameBoard(){
//   cells.forEach((cell, index) =>{
// cell.addEventListener('click',function(){
//     console.log('square')
//     cell.innerHTML='X'
// })
// })  
// }


//create a module for displayController

//game over function
function displayResults(winningPlayer){
   let result=document.getElementById('game-status');
   result.innerHTML=`${winningPlayer} is the winner`
   result.style.color='yellow';
   result.style.fontSize='30px'
}
//gameOver() call displayResults function
    
