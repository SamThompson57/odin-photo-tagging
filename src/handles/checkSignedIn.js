import{ getAuth } from 'firebase/auth';

function checkSignedIn(){
    return !!getAuth().currentUser
}

export default checkSignedIn