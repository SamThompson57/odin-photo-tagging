import React from "react";

const Reset = (props) =>{
    const { resetGame } = props
    return(
        <div>
            <button className="reset" onClick={resetGame}>START</button>
        </div>
    )
}

export default Reset