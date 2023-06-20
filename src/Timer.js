import React from "react";
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const {time} = props

   

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    return (
        <div className="timer">
            <div className="stopwatch-time">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
            </div>
        </div>
    )
}

export default Timer;