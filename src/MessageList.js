import React from "react";
import Message from "./Message";
import FlipMove from "react-flip-move";
import "./MessageList.css";

function MessageList({ messages, username }) {
  return (
    <div className="messageList">
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default MessageList;
