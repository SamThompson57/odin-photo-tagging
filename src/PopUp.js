import React, { useEffect, useState } from "react";
import Reset from "./Reset";
import timeConverter from "./timeConverter";
import checkSignedIn from "./handles/checkSignedIn";
import { doc } from "firebase/firestore";
import getOrSetHighScore from "./handles/getHighScore";



const PopUp = (props) => {
    const {resetGame, lastScore, highScore} = props
    
    const [savedScore, setSavedScore] = useState(highScore)
    
    useEffect(() => {
        const getHighScore = async () => {
            const result = await getOrSetHighScore(lastScore)
            setSavedScore(result)
        }
        getHighScore()
    },[highScore])
    
    return (
        <div className="popup">
            <div>FIND THREE TARGETS IN AS QUICK AS POSSIBLE</div>
            <div>TOP 10</div>
            {lastScore ? <div>SCORE: {timeConverter(lastScore)}</div>: null}          
            {savedScore ? <div>Personal Best: {timeConverter(savedScore)}</div> : null}
            <Reset resetGame={resetGame}/>
        </div>
    )
}

export default PopUp