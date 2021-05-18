import "./index.css"
import React from 'react';

import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

import { useAuthState } from "react-firebase-hooks/auth"

import SignIn from "./components/SignIn"
import ChatRoom from "./components/ChatRoom"
import NavBar from './components/NavBar';

firebase.initializeApp({
  apiKey: "AIzaSyBjTBacelzSwXDSSCQf9h7Q7ZSeJOz3V0U",
  authDomain: "fir-chat-app-3eace.firebaseapp.com",
  projectId: "fir-chat-app-3eace",
  storageBucket: "fir-chat-app-3eace.appspot.com",
  messagingSenderId: "807452714273",
  appId: "1:807452714273:web:149caa8acfbee35be34a60",
  measurementId: "G-DFBZWDNNEP"
});

export const auth = firebase.auth()
export const firestore = firebase.firestore()

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className={"app-body"}>
      <NavBar />

      <section>
        {user ? <ChatRoom/> : <SignIn />}
      </section>

    </div>
  );
}

export default App;
