import "../index.css"
import { auth } from "../App.js"


const ChatMessage = (props) => {

    const {text, uid, photoURL} = props.message
  
    const messageStyling = uid === auth.currentUser.uid ? "-sent" : "-received" 
  
    return (
      <div className={"container" + messageStyling}>
        <img src={photoURL} alt={"user"} className={"message-image"}/>
        <p className={"message" + messageStyling}>{text}</p>
      </div>
    )
}

export default ChatMessage