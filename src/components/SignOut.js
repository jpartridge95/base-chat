import "../index.css"

import { auth } from "../App"

const SignOut = () => {

    const signOutAction = () => {
      auth.signOut()
    }
  
    return auth.currentUser && (
        <div className={"user-info"}>
            <div className={"name-button-container"}>
                <h4 className={"user-name"}>{auth.currentUser.displayName}</h4>
                <button onClick={signOutAction} className={"sign-out-button"}>Sign Out</button>
            </div>

            <img src={auth.currentUser.photoURL} alt={"Own"} className={"user-photo"} ></img>
        </div>
    )
  }

export default SignOut