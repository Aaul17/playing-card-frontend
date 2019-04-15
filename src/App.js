import React, { Component } from 'react';
import './App.css';
import ParentContainer from './components/ParentContainer'

const Background = require('./assets/game-background.jpg')

class App extends Component {
  state = {
    deck: null,
    cards: [],
    remaining: null
  }

  newDeck = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json())
    .then(deckData => {
      this.setState({
        deck: deckData.deck_id,
        remaining: deckData.remaining,
        cards: []
      });
    });
  }

  drawCards = () => {
    if (this.state.remaining >= 5) {
      fetch(`https://deckofcardsapi.com/api/deck/${this.state.deck}/draw/?count=5`)
      .then(response => response.json())
      .then(cardData => {
        this.setState({
          cards: cardData.cards,
          remaining: cardData.remaining
        });
      });
    } else if (this.state.remaining === 2) {
      fetch(`https://deckofcardsapi.com/api/deck/${this.state.deck}/draw/?count=${this.state.remaining}`)
      .then(response => response.json())
      .then(cardData => {
        this.setState({
          cards: cardData.cards,
          remaining: cardData.remaining
        });
      });
    } else {
      this.setState({
        cards: []
      })
    }
  }

  render() {
    return (
      <div className="App" style={{backgroundImage: `url(${Background})`}}>
        <h1>
        Playing Cards
        </h1>
        <div className="instructions">
          <h3>Instructions</h3>
          <p>- Click on "New Deck"</p>
          <p>- Click on the left card to draw 5 new cards</p>
          <p>- When your deck is out of cards, you can create a new deck </p>
        </div>
        <br />
        <ParentContainer
        deck={this.state.deck}
        cards={this.state.cards}
        newDeck={this.newDeck}
        drawCards={this.drawCards}
        />

      </div>
    );
  }
}

export default App;
