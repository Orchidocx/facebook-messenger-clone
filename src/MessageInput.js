import React, { useState } from "react";
import "./MessageInput.css";
import { FormControl, Input, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
import { db } from "./firebase";
function MessageInput({ username }) {
  const [input, setInput] = useState("");
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    localStorage.setItem("fbmUser1", username);
  };
  return (
    <form className="messageInput">
      <FormControl className="messageInput__formControl">
        <Input
          className="messageInput__input"
          placeholder="Enter a message..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
        />
        <IconButton
          className="messageInput__iconButton"
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          <SendIcon />
        </IconButton>
      </FormControl>
    </form>
  );
}

export default MessageInput;
