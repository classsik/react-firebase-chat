import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBOlvqhzi6Xjiiiyh2MK70iwUMOXWIbyl4",
  authDomain: "react-chat-d1a58.firebaseapp.com",
  projectId: "react-chat-d1a58",
  storageBucket: "react-chat-d1a58.appspot.com",
  messagingSenderId: "1080735119147",
  appId: "1:1080735119147:web:ef47cc46fb91c8b411376e",
  measurementId: "G-15FX45SNHW",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{ firebase, auth, firestore }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
