import React, { useState, useEffect } from "react";
import signOn from "./components/outline_account.png"
import checkSignedIn from "./handles/checkSignedIn";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import Profile from "./Profile";


const Auth = () => {

    const [logInStatus, setLogInStatus] = useState(!!getAuth().currentUser)
    
    function initFirebaseAuth() {
        onAuthStateChanged(getAuth(), authStateObserver)
    }

    async function signIn(){
        const provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider)
        
    }

    function signOutUser() {
        signOut(getAuth())
        setLogInStatus(checkSignedIn())
    }

    function authStateObserver(user) {
        if (user) {
          setLogInStatus(checkSignedIn())

        } else {
          setLogInStatus(checkSignedIn())
        }
      }

    useEffect(() => {
        initFirebaseAuth()
      }, []);

    return (
        <div>
            {logInStatus ? <Profile signOutUser={signOutUser}/> : <img src={signOn} onClick={signIn}></img>}
        </div>
    )
}

export default Auth