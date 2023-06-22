import React from "react";
import Reset from "./Reset";

const PopUp = (props) => {
    const {resetGame} = props
    return (
        <div className="popup">
            <div>FIND THREE TARGETS IN AS QUICK AS POSSIBLE</div>
            <Reset resetGame={resetGame}/>
        </div>
    )
}

export default PopUp