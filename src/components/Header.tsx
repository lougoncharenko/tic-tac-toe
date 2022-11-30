import React from 'react';
import './Header.css'

interface Props {
  text: string
}

export const Header = (props:Props) => {
  return (
    <div className="header">
    <h1>TIC TAC TOE</h1>
    <h2 className="winner">{props.text}</h2>
</div>
  );
}
