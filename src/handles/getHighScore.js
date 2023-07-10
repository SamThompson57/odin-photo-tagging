import { collection, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore"
import checkSignedIn from "./checkSignedIn"
import { getAuth } from "firebase/auth"

 async function getOrSetHighScore(newScore){
    // Check high score Exists

    if(!checkSignedIn()) return newScore
    
    console.log(getAuth())
    const userID = getAuth().currentUser.uid
    console.log(userID)
    const docRef = doc(getFirestore(), 'players', userID)
    
    const docsnap = await getDoc(docRef);

    if (docsnap.exists()){
        const currentScore = await docsnap.data().score
        //If the user file Exists check if the new score beats the current high score and update
        console.log("Current Score" + currentScore)
        if (newScore == null) return currentScore
        if (currentScore > newScore || !currentScore){
            updateDoc(docRef, {
                score: newScore
            })
        }else return currentScore
    } else {
        setDoc(doc(getFirestore(), 'players', userID), {
            id: userID,
            name: getAuth().currentUser.displayName,
            score: newScore
        });
    } 
    return newScore

}

export default getOrSetHighScore