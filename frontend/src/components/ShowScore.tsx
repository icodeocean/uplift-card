/** @format */

import React from 'react'

interface ScoreType {
	score: number
	ace: number
}

function ShowScore(props: ScoreType) {
	return (
		<div className='flex padding-top-score text-center justify-center'>
			<div className='score-panel mr-1'>
				<p className='big-font-size'>{props.score}</p>
				<p className='small-font-size'>Cards Left</p>
			</div>
			<div className='score-panel'>
				<p className='big-font-size'>{props.ace}</p>
				<p className='small-font-size'>Ace Cards Left</p>
			</div>
		</div>
	)
}

export default ShowScore
