import React, {useEffect, useState} from 'react';
import './Gameboard.css'
import { Header } from './Header';

export const GameBoard = () => {
    const [turn, setTurn] = useState(0);
    const [data, setData] = useState(['', '', '', '', '', 
    '', '', '', ''])
    const [winner, setWinner] = useState('');
    const [reset, setReset] = useState(false);
    const [message, setMessage] = useState<any>("Player One's Turn")
    
      const draw = (event:any, index:number) => {
        // Draws only if the position is not taken 
        if (data[index - 1] === '') {
            // Draws X if it's player 1's turn else draws O
            const current = turn === 0 ? "X" : "O"
            // Updating the data state
            data[index - 1] = current;
            //Drawing on the board
            event.target.innerText = current;
            // Switching the turn
            setTurn(turn === 0 ? 1 : 0)
            //switching message
            turn == 0? setMessage("Player One's Turn") : setMessage("Player One's Turn") 
        }
    }

    useEffect(() => {
        // Checks for the win condition in rows
        const checkRow = () => {
            let ans = false;
            for (let i = 0; i < 9; i += 3) {
                ans ||= (data[i] === data[i + 1] && 
                data[i] === data[i + 2] && 
                data[i] !== '')
            }
            return ans;
        }
        // Checks for the win condition in cols
        const checkCol = () => {
            let ans = false;
            for (let i = 0; i < 3; i++) {
                ans ||= (data[i] === data[i + 3] && 
                data[i] === data[i + 6] && 
                data[i] !== '')
            }
            return ans;
        }
        // Checks for the win condition in diagonals
        const checkDiagonal = () => {
            return ((data[0] === data[4] && 
            data[0] === data[8] && data[0] !== '') || 
            (data[2] === data[4] && data[2] === data[6] && 
            data[2] !== ''));
        }
  
        // Checks if at all a win condition is present
        const checkWin = () => {
            return (checkRow() || checkCol() || checkDiagonal());
        }
        // Checks for a tie
        const checkTie = () => {
            let count = 0;
            data.forEach((cell) => {
                if (cell !== '') {
                    count++;
                }
            })
            return count === 9;
        }
        // Setting the winner in case of a win
        if (checkWin()) {
            setWinner(turn === 0 ? "Player 2 Wins!" : 
            "Player 1 Wins!");
        } else if (checkTie()) {
            // Setting the winner to tie in case of a tie
            setWinner("It's a Tie!");
        }
  
    })

    const resetGame = () => {
        setReset(true);
    }
    return (
    <>
    <Header  text ={message} />
    <div className="content">
        <div className="cell" id="0" onClick={(e) => draw(e, 1)} >  </div>
        <div className="cell" id="1" onClick={(e) => draw(e, 2)} >  </div>
        <div className="cell" id="2" onClick={(e) => draw(e, 3)} >  </div>

        <div className="cell" id="3" onClick={(e) => draw(e, 4)} >  </div>
        <div className="cell" id="4" onClick={(e) => draw(e, 5)} >  </div>
        <div className="cell" id="5" onClick={(e) => draw(e, 6)} >  </div>
        
        <div className="cell" id="6" onClick={(e) => draw(e, 7)} >  </div>
        <div className="cell" id="7" onClick={(e) => draw(e, 8)} >  </div>
        <div className="cell" id="8" onClick={(e) => draw(e, 9)} >  </div>
    </div>
    <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                {/* Display the current winner */}
                <div className='winner-text'>{winner}</div>
                {/* Button used to reset the board */}
                <button onClick={() => resetGame()} >
                    Reset Board
                </button>
            </div>
    </>
    );
}

