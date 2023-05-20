import { useEffect, useRef } from "react";
import JSConfetti from "js-confetti";
import Winner from '../assets/Winner.svg'

interface PlayType {
  mode: number
}
const Congratulations = (props:PlayType) => {
  const canvasRef = useRef();
  const confettiRef = useRef<JSConfetti>();

  useEffect(() => {
    confettiRef.current = new JSConfetti({ canvas: canvasRef.current });
    if (confettiRef.current && props.mode === 1) {
      confettiRef.current.addConfetti({
        confettiRadius: 5,
        confettiNumber: 300
      });
    }
  });

  return (
    <div className="top-40 mt-10 absolute">
      <div className="animate">
		    <img src={Winner} alt='winner'/>
      </div>
      <canvas className="canvas" ref={canvasRef.current}/>
    </div>
    
  )
};

export default Congratulations;
