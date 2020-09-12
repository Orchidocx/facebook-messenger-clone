import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  
  const sendMessage = (event) => {
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger</h1>
      <input value={input} onChange={event => setInput(event.target.value)}type="text"/>
      <button onClick={sendMessage}>Send Message</button>
      {messages.map(message => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
