import React, { useEffect, useState } from "react";
import Headder from "./Headder";
import Body from "./Body";

const App = () => {
  const fetchTargets = () => {
    const data = require('./AllTargets.json')
    return data.targets
  }

  const [target, setTarget] = useState(null)
  const [availibleTargets, setAvailibleTargets] = useState(fetchTargets())

  const [score, setScore] = useState(0)

  useEffect(() => {
    newTarget()
},[])

const newTarget = () => {
  const rndIndex = Math.floor(Math.random()*availibleTargets.length)
  console.log(availibleTargets[rndIndex])
  setTarget(availibleTargets[rndIndex])
  setAvailibleTargets(availibleTargets.toSpliced(rndIndex,1))
  }
  
  return (
    <div className="App">
      <Headder target={target} score={score}/>
      
      {/* There will be a pop up instead of the body at the start of the game 
      and at the end displaying  */}
      <Body target={target} newTarget={newTarget}/>
    </div>
  );
}

export default App;
