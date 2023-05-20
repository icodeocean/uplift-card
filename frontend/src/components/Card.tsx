import React from "react";
import cn from "classnames";
import Diamond from '../assets/Diamond.svg'
import Clover from '../assets/Clover.svg'
import Heart from '../assets/Heart.svg'
import Spade from '../assets/Spade.svg'

export interface CardType {
  number: number,
  suit: number,
}

interface Type1 extends CardType {
  index: number,
}

function Card(props:Type1) {
  const suits = [Diamond, Clover, Heart, Spade]
  const nums = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
  return(
    <div className={`card index${props.index}`}>
      <p className={cn("",{'text-red' : !(props.suit % 2)})}>{nums[props.number]}</p>
      <img src = {suits[props.suit]} alt = {'card'} className="small-image"/>
      <img src = {suits[props.suit]} alt = {'card'} className="big-image"/>
    </div>
  )
}

export default Card