import React from "react";
import { CardType } from "./Card";
import Card from "./Card";
import { v4 as uuid4 } from 'uuid'
interface type {
  cards: CardType[]
}

function CardList (props: type) {
  const classNames = [
    'origin-bottom-right rotate-12',
    'origin-bottom-left rotate-6',
    'mt-9',
    'origin-bottom-right -rotate-6',
    'origin-bottom-left -rotate-12',
    '',
  ]
  return(
    <div className='flex flex-row flex-wrap justify-center'>
      {
        props.cards && props.cards.map((item:CardType, index:number)=>{
          if(props.cards.length === 2) index = 5
          if(screen.width <= 375) {
            index = 5
          }
          return (
            <div className={'' + classNames[index]} key={uuid4()} style={{position:'relative', zIndex:'-1'}}>
              <Card number={item.number} suit={item.suit} index={index} />
            </div>
          )
        })
      }
    </div>
  )
}

export default CardList