import React, {MouseEventHandler, useState} from 'react';
import './Gameboard.css'
import { Header } from './Header';
import { player } from './Player';

export const GameBoard = () => {
    const [message, setMessage] = useState<any>("Player One's Turn")
    const [turn, setTurn] = useState(0);
    const [data, setData] = useState(['', '', '', '', '', 
    '', '', '', ''])
    const playerOne = player('Player One', 'X');
    const playerTwo = player('Player Two', 'O');
 

      // Function to draw on the board
      const draw = (event:any, index:number) => {
        // Draws only if the position is not taken 
        // and winner is not decided yet
        if (data[index - 1] === '') {
            // Draws X if it's player 1's turn else draws O
            const current = turn === 0 ? "X" : "O"
            // Updating the data state
            data[index - 1] = current;
            //Drawing on the board
            event.target.innerText = current;
            // Switching the turn
            setTurn(turn === 0 ? 1 : 0)
            if (turn === 0) {
                setMessage("Player One's Turn")
            } else {
                setMessage("Player One's Turn")
            }
        }
      
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
    </>
    );
}

