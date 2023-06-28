import React, { useState } from "react";
import signOn from "./components/outline_account.png"
import checkSignedIn from "./handles/checkSignedIn";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import Profile from "./Profile";


const Auth = () => {

    const [logInStatus, setLogInStatus] = useState(checkSignedIn())
    
    async function signIn(){
        const provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider)
        setLogInStatus(checkSignedIn())
    }

    function signOutUser() {
        signOut(getAuth())
        setLogInStatus(checkSignedIn())
    }

    return (
        <div>
            {logInStatus ? <Profile signOutUser={signOutUser}/> : <img src={signOn} onClick={signIn}></img>}
        </div>
    )
}

export default Auth