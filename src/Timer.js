import React from "react";
import timeConverter from "./timeConverter";

const Timer = (props) => {
    const {time} = props

   

    // Minutes calculation

    return (
        <div className="timer">
            <div className="stopwatch-time">
            {timeConverter(time)}
            </div>
        </div>
    )
}

export default Timer;