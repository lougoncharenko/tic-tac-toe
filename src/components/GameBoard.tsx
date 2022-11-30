import React, {useState} from 'react';
import './Gameboard.css'
import { Header } from './Header';
import { player } from './Player';

export const GameBoard = () => {
    const [message, setMessage] = useState<any>("Player One's Turn")
    const [mark, setMark] = useState<string>('')
    const playerOne = player('Player One', 'X');
    const playerTwo = player('Player Two', 'O');
    let symbol = '';
    const placeMark = () => {
        if (symbol === '') {
            symbol = playerOne.symbol; 
            setMark(symbol);
            setMessage("Player Two's Turn");
        } else if (symbol === playerOne.symbol) {
            symbol = playerTwo.symbol;
            setMark(symbol);
            setMessage("Player One's Turn")
        } else if (symbol === playerTwo.symbol) {
            symbol = playerOne.symbol; 
            setMark(symbol);
            setMessage("Player Two's Turn");
        }
    }
    return (
    <>
    <Header  text ={message} />

    <div className="content">
        <div className="cell" id="0" onClick = {placeMark}> <p>{mark}</p> </div>
        <div className="cell" id="1" onClick = {placeMark}> <p>{mark}</p> </div>
        <div className="cell" id="2"onClick = {placeMark}> <p>{mark}</p> </div>

        <div className="cell" id="3" onClick = {placeMark}> <p>{mark}</p> </div>
        <div className="cell" id="4" onClick = {placeMark}> <p>{mark}</p> </div>
        <div className="cell" id="5" onClick = {placeMark}> <p>{mark}</p> </div>
        
        <div className="cell" id="6" onClick = {placeMark}> <p>{mark}</p> </div>
        <div className="cell" id="7" onClick = {placeMark}> <p>{mark}</p> </div>
        <div className="cell" id="8" onClick = {placeMark}> <p>{mark}</p> </div>
    </div>
    </>
    );
}

