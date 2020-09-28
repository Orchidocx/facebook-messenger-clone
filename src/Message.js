import React, { useEffect, useRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

function Message({ message, username }) {
  const isUser = username === message?.username;
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const timestamp =
    message.timestamp?.toDate()?.toString().substring(4, 21) || "now";
  useEffect(scrollToBottom, [message]);
  return (
    <div
      ref={messagesEndRef}
      className={`message ${isUser && "message__user"}`}
    >
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || "Unknown User"}: `}
            {message.message}
          </Typography>
          <span className="message__timestamp">{timestamp}</span>
        </CardContent>
      </Card>
    </div>
  );
}
export default Message;
