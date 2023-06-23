import React from "react";
import Reset from "./Reset";
import timeConverter from "./timeConverter";

const PopUp = (props) => {
    const {resetGame, lastScore, highScore} = props
    return (
        <div className="popup">
            <div>FIND THREE TARGETS IN AS QUICK AS POSSIBLE</div>
            <div>TOP 10</div>
            {lastScore ? <div>SCORE: {timeConverter(lastScore)}</div>: null}          
            {lastScore ? <div>Personal Best: {timeConverter(highScore)}</div> : null}
            <Reset resetGame={resetGame}/>
        </div>
    )
}

export default PopUp