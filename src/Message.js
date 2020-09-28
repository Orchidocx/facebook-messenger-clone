import React, { useEffect, useRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

function Message({ message, username }) {
  const isUser = username === message?.username;
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
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
          {message.timestamp?.toDate()?.toString() || "now"}
        </CardContent>
      </Card>
    </div>
  );
}

// const Message = forwardRef(({ message, username }, ref) => {
//   const isUser = username === message?.username;
//   return (
//     <div ref={ref} className={`message ${isUser && "message__user"}`}>
//       <Card className={isUser ? "message__userCard" : "message__guestCard"}>
//         <CardContent>
//           <Typography color="white" variant="h5" component="h2">
//             {!isUser && `${message.username || "Unknown User"}: `}
//             {message.message}
//           </Typography>
//           {message.timestamp?.toDate()?.toString() || "now"}
//         </CardContent>
//       </Card>
//     </div>
//   );
// });

export default Message;
