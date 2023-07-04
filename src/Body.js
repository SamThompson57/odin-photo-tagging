import React, { useRef } from "react"

import { useDraggable } from 'react-use-draggable-scroll'
import shoot from "./clickHandler"
import getImage from "./handles/getImage"
import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebase_setup/firebase"

initializeApp(firebaseConfig)
const map = await getImage()

const Body = (props) => {
    const { target, addScore, gameOn } = props
    const ref = useRef(null)
    

    const { events } = useDraggable(ref)

    return (
        <div className="body">
            
            
            <div id="imgContainer" ref={ref} {...events} onClick={(event) => shoot(event, target, addScore, gameOn)} >
                <img src={map}></img>
            </div>
            
        </div>
    )
}

export default Body