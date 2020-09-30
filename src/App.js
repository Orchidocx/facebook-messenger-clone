import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import Header from "./Header";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

function App() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem("fbmUser1"));

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    if (!username) {
      setUsername(prompt("Please enter your name"));
    }
  }, []);

  return (
    <div className="app">
      <Header username={username} />
      <MessageList messages={messages} username={username} />
      <MessageInput messages={messages} username={username} />
    </div>
  );
}

export default App;
