import "../index.css"

import SignOut from "./SignOut.js"

const NavBar = () => {
    
    return (
        <header className={"navbar"}>
            <h1 className={"navbar-title"} >BaseChat</h1>
            <SignOut /> 
        </header >
    )
}

export default NavBar