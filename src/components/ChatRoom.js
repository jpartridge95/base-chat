import "../index.css"

import { firestore, auth } from "../App.js"
import { useState, useRef } from "react"
import firebase from "firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"

import ChatMessage from "./ChatMessage.js"




const ChatRoom = () => {
    const messagesRef = firestore.collection("messages")
    const query = messagesRef.orderBy("createdAt").limit(30)
  
    const [messages] = useCollectionData(query, {idField: "id"})

    const sneakyDiv = useRef()

    const [formValue, setFormValue] = useState("");
  
    const handleFormChange = (e) => {
      setFormValue(e.target.value)
    }
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const {uid, photoURL} = auth.currentUser
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue("")
  
      sneakyDiv.current.scrollIntoView({behavior: "smooth"})
    }
  
  
    return (
      <>
        <div className={"chat-room"}>
          {messages && messages.map((msg) => {return (<ChatMessage key={msg.id} message={msg} />)})}
          <div ref={sneakyDiv}></div>
        </div>
  
        <form className={"chat-input"}>
          <input type={"text"} value={formValue} onChange={handleFormChange}></input>
          <button type={"submit"} onClick={sendMessage}>Send</button>
        </form>
      </>
    )
  }

  export default ChatRoom