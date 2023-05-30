import React, { useRef } from "react"
import map from "./components/map.jpg"
import { useDraggable } from 'react-use-draggable-scroll'
import shoot from "./clickHandler"


const Body = (props) => {
    const { target, newTarget } = props
    const ref = useRef(null)

    const { events } = useDraggable(ref)

    return (
        <div className="body">
            
            {/* Image - A dragable image that the player will hunt for the target */}
            <div id="imgContainer" ref={ref} {...events} onClick={(event) => shoot(event, target, newTarget)} >
                <img src={map}></img>
                {/*<div className="refBox"></div>*/}
            </div>
            
        </div>
    )
}

export default Body