import React from 'react'

interface ModeType {
  mode: number,
  generate: () => void,
  reset: () => void,
}

function Footer(props: ModeType) {
  function deal() {
    props.generate()
  }
  function reset() {
    props.reset()
  }
  function playAgain() {
    props.reset()
  }
  return(
    <div className='flex flex-col items-center'>
      {
        props.mode === 0 && (
          <div className='mt-14 flex flex-col'>
            <button onClick={deal} className="transition ease-in duration-300 big-button-style rounded-3xl text-black bg-amber-300 hover:bg-amber-400 active:bg-amber-500 focus:outline-none focus:ring focus:ring-amber-300  font-black" >DEAL</button>
            <button onClick={reset} className="transition ease-in duration-300 reset-button-style rounded-3xl bg-opacity-0 bg-amber-300 text-amber-300 hover:bg-amber-300 hover:text-black active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-300 border-amber-300  border-2 border-solid font-black">Reset</button>
          </div>
        )
      }
      {
        props.mode === 2 && (
          <div className='text-white footer-text-style text-center font-light'>
            <p>You lose.</p>
            <p>Better luck next time!</p>
          </div>
        )
      }
      {
        props.mode !== 0 && (
          <button onClick={playAgain} className="transition ease-in duration-300 again-button-style rounded-3xl bg-opacity-0 bg-amber-300 text-amber-300 hover:bg-amber-300 hover:text-black active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-300 border-amber-300  border-2 border-solid font-black">Play Again</button>  
        )
      }
      
    </div>
  )
}

export default Footer