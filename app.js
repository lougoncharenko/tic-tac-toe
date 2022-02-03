//instantiate UI
const gameBoard = document.querySelector('.content');
const cell=document.querySelector('.cell'); //will need a forEach()
const startBtn= document.getElementById('startButton');



//create a player construtor
function Player(name, marker){
    this.name=name;
    this.marker=marker;
}

const playerOne = new Player('Player One', 'X');
const playerTwo =new Player ('Player Two', 'O');

//create a module for the game board

//create a module for displayController

//game over function
function displayResults(winningPlayer){
   let result=document.getElementById('result');
   result.innerHTML=`${winningPlayer} is the winner`
   result.style.color='yellow';
   result.style.fontSize='30px'
}
//gameOver() call displayResults function
    
