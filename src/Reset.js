import React from "react";

const Reset = (props) =>{
    const { resetGame } = props
    return(
        <div>
            <button onClick={resetGame}>START</button>
        </div>
    )
}

export default Reset