import React from "react"
import Timer from "./Timer"
import Auth from "./Auth"

const Headder = (props) => {
    const {score, target, time, resetHS, highScore } = props
    return (
        <div className="headder">
            <div className="timerContainer">
                <div>Time Taken: </div>
                <Timer time={time}/>
            </div>
            <div>Score: {score}/3</div>
            <div>Target: {target.name}, {target.series}</div>
            <Auth resetHS={resetHS} highScore={highScore}/>
        </div>
    )
}

export default Headder