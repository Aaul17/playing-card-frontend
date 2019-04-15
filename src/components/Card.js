import React from 'react';

const Card = ({suit, value}) => {
  return(
    <div className="card row" style={suit==="HEARTS" || suit==="DIAMONDS" ? { color: "red" } : {color: "black"}}>
      <div className="column card-left">
        <span className="top-left">{value}</span>
        <span className="suit-top">{suit==="HEARTS" ? "♥" : (suit==="DIAMONDS" ? "♦" : (suit==="SPADES" ? "♠" : "♣"))}</span>
      </div>
      <div className="column card-middle">
        <span className="main-suit">{suit==="HEARTS" ? "♥" : (suit==="DIAMONDS" ? "♦" : (suit==="SPADES" ? "♠" : "♣"))}</span>
      </div>
      <div className="column card-right">
        <span className="suit-bottom">{suit==="HEARTS" ? "♥" : (suit==="DIAMONDS" ? "♦" : (suit==="SPADES" ? "♠" : "♣"))}</span>
        <span className="bottom-right">{value}</span>
      </div>
    </div>
  )
}

export default Card
