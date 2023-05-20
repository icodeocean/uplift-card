import React, { useEffect, useState } from 'react'
import { CardType } from '../components/Card'
import ShowScore from '../components/ShowScore'
import Footer from '../components/Footer'
import CardList from '../components/CardList'
import Congratulations from '../components/Congratulations'
import { useQuery, useMutation,useLazyQuery } from '@apollo/client';
import { query_deal, mutation_reset } from '../graphql/graphql'

function GameBoard() {
  const [showed, setShowed] = useState<CardType[]>([])
	const [remain, setRemain] = useState(52)
	const [ace, setAce] = useState(4)
	const [status, setStatus] = useState(0)
	const [success, setSuccess] = useState(false)

	const [reset, { data : successResult}] = useMutation(mutation_reset);
  const [refetch, {data: showedCard,  loading} ] = useLazyQuery(query_deal,{fetchPolicy: 'network-only'});
  
  function generateCards() {
    let tmpArray : Array<CardType> = new Array(0)
    let aceCount = 0
    
    for(let i = 0; i < showedCard.deal.length; i ++) {
      const num = showedCard.deal[i].number
      const tmp : CardType = {
        number: num % 13,
        suit: Math.floor(num / 13),
      }
      if(tmp.number === 0) {
        aceCount ++
      }
      tmpArray.push(tmp)
    }
    setShowed(tmpArray)
    setRemain(remain - tmpArray.length)
    setAce(ace - aceCount)
	}

  useEffect(()=>{
    if(showedCard && !loading) {
      generateCards();
    }
  }, [showedCard])

  const deal = ()=> {
    refetch()
    setSuccess(successResult.reset.success)
  }

	function resetAll() {
		setShowed(new Array(0))
		setRemain(52)
		setAce(4)
		setStatus(0)
		reset()
	}

	useEffect(() => {
    reset()
	},[])

	useEffect(() => {
		if(remain === 0) {
			if(success) {
				setStatus(1)
			} else {
				setStatus(2)
			}
		}
	},[remain])

  return (
    
			<div>
				<ShowScore
					score={remain}
					ace={ace}
				/>
				<div className='items-center flex flex-col-reverse board-style'>
					<Footer
					mode={status}
					generate={deal}
					reset={resetAll}
					/>
					<CardList cards={showed} />	
					{
						status === 1 && (
							<Congratulations mode={status}/>
						)
					}
				</div>
			</div>
		
  )
}

export default GameBoard