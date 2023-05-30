import React from "react"

const Headder = (props) => {
    const {score, target} = props
    return (
        <div className="headder">
            <div>Time Taken:</div>
            <div>Score: {score}/3</div>
            <div>Target: {target.name}, {target.series}</div>
            {/* Google Sign in to track score */}
        </div>
    )
}

export default Headder