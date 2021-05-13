import React, { useContext, useState } from "react";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);

  const [value, setValue] = useState("");
  const [messages] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  return (
    <div className="chat">
      <div className="chat-messages">
        {messages &&
          messages.map((message) => (
            <div
              className="message"
              style={{
                marginLeft: user.uid === message.uid ? "800px" : "auto",
              }}
            >
              <img src={message.photoURL} alt="" className="avatar" />
              <div className="message-block">
                <h2 className="name">{message.displayName}</h2>
                <p className="message-text">{message.text}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className="button" onClick={sendMessage}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Chat;
