import React from "react";

const Reset = (props) =>{
    const { resetGame } = props
    return(
        <div>
            <button onClick={resetGame}>RESET</button>
        </div>
    )
}

export default Reset