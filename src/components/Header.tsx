import React from 'react';
import './styles.css'

export const Header = () => {
  return (
    <div className="header">
    <h1>TIC TAC TOE</h1>
    <button className="button" id="resetBtn">Reset Game</button>
    <h2 id="winner"></h2>
</div>
  );
}
