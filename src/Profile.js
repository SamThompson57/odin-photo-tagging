import { getAuth } from "firebase/auth";
import React from "react";
import placeholder from "./components/outline_account.png"

const Profile = (props) =>{
    const {signOutUser} = props
    const user = getAuth()

    return (
        <div>
            <img className="profilePic" src={user.currentUser.photoURL || placeholder}></img>
            <div onClick={signOutUser} className="signOut">SIGN OUT</div>
        </div>
    )
}

export default Profile