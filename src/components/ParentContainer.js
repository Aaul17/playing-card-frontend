import React from 'react';
import GameContainer from './GameContainer';

const Deck = require('../assets/deck-image.png')

const ParentContainer = (props) => {
  return (
    <center>
      <button onClick={event => props.newDeck()}>New Deck</button>
      <br />
      <br />
      <div className="row">
        <div className="column left">
          <div onClick={event => props.drawCards()} className="deck" style={{backgroundImage: `url(${Deck})`}}>
          </div>
        </div>
        <div className="game-container column right">
        <GameContainer cards={props.cards}/>
        </div>
      </div>
    </center>
  );
}

export default ParentContainer
