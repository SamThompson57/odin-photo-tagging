import React from "react"
import Timer from "./Timer"
import Reset from "./Reset"

const Headder = (props) => {
    const {score, target, time } = props
    return (
        <div className="headder">
            <div className="timerContainer">
                <div>Time Taken: </div>
                <Timer time={time}/>
            </div>
            <div>Score: {score}/3</div>
            <div>Target: {target.name}, {target.series}</div>
            {/* Google Sign in to track score */}
        </div>
    )
}

export default Headder