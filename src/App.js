import React, { useEffect, useState } from "react";
import Headder from "./Headder";
import Body from "./Body";
import PopUp from "./PopUp";
import { getFirestore, collection, getDoc, doc, getDocs } from 'firebase/firestore'

const App = () => {
  async function fetchTargets() {
    const targets = []
    const dataSnapshot = await getDocs(collection(getFirestore(), 'targets'))
    dataSnapshot.forEach((doc) => {
      const target = doc.data()
      targets.push(target);
    });
    return targets
  }
  const targetPull = fetchTargets()
  const [target, setTarget] = useState({})
  const [availibleTargets, setAvailibleTargets] = useState(targetPull)
  const [gameOn, setGameOn] = useState(false)


  const [highScore, setHighScore] = useState(null)
  const [lastScore, setLastScore] = useState(null)

  const [score, setScore] = useState(0)
  const [time, setTime] = useState(0);

  function resetHS() {
    //function to reset HS when user loggs out
    setHighScore(null)
  }

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

async function newTarget() {
  const targetlist = await availibleTargets
  const rndIndex = Math.floor(Math.random()*targetlist.length)
  console.log(targetlist[rndIndex])
  setTarget(targetlist[rndIndex])
  setAvailibleTargets(targetlist.toSpliced(rndIndex,1))
  }

  const addScore = () => {
    setScore(score + 1) 
    
    if (score <= 1) {
      newTarget()
    }else{
      setLastScore(time)
      if(!highScore || highScore>time){
        setHighScore(time)
      }
      console.log("Game Over")
      setGameOn(false) 
      setAvailibleTargets(targetPull)
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
      <Headder target={target} score={score} time={time} resetHS={resetHS} highScore={highScore}/>
      
      {gameOn ? null : <PopUp resetGame={resetGame} lastScore={lastScore} highScore ={highScore}/>}
      <Body target={target} addScore={addScore} gameOn={gameOn}/>
    </div>
  );
}

export default App;
