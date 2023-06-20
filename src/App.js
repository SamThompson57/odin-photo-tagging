import React, { useEffect, useState } from "react";
import Headder from "./Headder";
import Body from "./Body";

const App = () => {
  const fetchTargets = () => {
    const data = require('./AllTargets.json')
    return data.targets
  }

  const [target, setTarget] = useState({})
  const [availibleTargets, setAvailibleTargets] = useState(fetchTargets())
  const [gameOn, setGameOn] = useState(true)

  const [score, setScore] = useState(0)
  const [time, setTime] = useState(0);

  useEffect(() => {
      let intervalId;
      if (gameOn) {
        // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
        intervalId = setInterval(() => setTime(time + 1), 10);
      }
      return () => clearInterval(intervalId);
    }, [gameOn, time]);

  useEffect(() => {
    newTarget()
},[])

const newTarget = () => {
  console.log(availibleTargets.length)
  const rndIndex = Math.floor(Math.random()*availibleTargets.length)
  console.log(availibleTargets[rndIndex])
  setTarget(availibleTargets[rndIndex])
  setAvailibleTargets(availibleTargets.toSpliced(rndIndex,1))
  }

  const addScore = () => {
    setScore(score + 1) 
    
    if (score <= 1) {
      newTarget()
    }else{
      console.log("Game Over")
      setGameOn(false) 
      setAvailibleTargets(fetchTargets())
    } 
  }

  const resetGame = () => {
    setScore(0)
    setGameOn(true)
    newTarget()
    setTime(0)
  }

  return (
    <div className="App">
      <Headder target={target} score={score} time={time} gameOn={gameOn} resetGame={resetGame}/>
      
      {/* There will be a pop up instead of the body at the start of the game 
      and at the end displaying  */}
      <Body target={target} addScore={addScore} gameOn={gameOn}/>
    </div>
  );
}

export default App;
