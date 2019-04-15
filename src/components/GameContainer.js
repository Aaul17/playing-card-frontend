import React from 'react';
import Card from './Card'

const GameContainer = (props) => {
  return (
    <>
    {props.cards.map(cardObj =>
      isNaN(cardObj.value) ?
      <Card
      card={cardObj}
      image={cardObj.image}
      key={cardObj.code}
      value={cardObj.value.split("")[0]}
      suit={cardObj.suit}
      />
      :
      <Card
      card={cardObj}
      image={cardObj.image}
      key={cardObj.code}
      value={cardObj.value}
      suit={cardObj.suit}
      />
    )}
    </>
  )
}

export default GameContainer
