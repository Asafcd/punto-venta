//@ts-nocheck
import { app } from "../firebase.ts";
import { getAuth, signInWithEmailAndPassword,signOut } from 'firebase/auth';

const auth = getAuth(app)

export const login = async(email:string, password:string) => {
    try {
        const {user} = await signInWithEmailAndPassword(auth, email, password)
        
        return {status:true, user}
    } catch (error) {
        const errorCode = error.code
        const errorMsg = error.message

        return {status:false, errorCode, errorMsg}
    }
}

export const logout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}
