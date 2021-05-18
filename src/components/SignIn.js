import "../index.css"

import { auth } from "../App"
import firebase from "firebase"



const SignIn = () => {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
    }

  return (
    <button onClick={signInWithGoogle} className={"sign-in"}>Sign in using Google</button>
  )
}

export default SignIn