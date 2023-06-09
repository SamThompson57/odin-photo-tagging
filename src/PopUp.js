import React, { useEffect, useState } from "react";
import Reset from "./Reset";
import timeConverter from "./timeConverter";
import checkSignedIn from "./handles/checkSignedIn";
import { doc } from "firebase/firestore";
import getOrSetHighScore from "./handles/getHighScore";
import LeaderBoard from "./LeaderBoard";



const PopUp = (props) => {
    const {resetGame, lastScore, highScore} = props
    
    const [savedScore, setSavedScore] = useState(highScore)
    
    useEffect(() => {
        const getHighScore = async () => {
            const result = await getOrSetHighScore(lastScore)
            await setSavedScore(result)
        }
        getHighScore()
    },[savedScore])
    
    return (
        <div className="popup">
            <div className="instruction">FIND THREE TARGETS AS QUICKLY AS POSSIBLE</div>
            <LeaderBoard/>
            <div className="scores">
                {lastScore ? <div>Last Score: {timeConverter(lastScore)}</div>: null}          
                {savedScore ? <div>Personal Best: {timeConverter(savedScore)}</div> : null}
            </div>
            
            <Reset resetGame={resetGame}/>
        </div>
    )
}

export default PopUp