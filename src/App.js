import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}type="text"/>
        <Button type='submit' onClick={sendMessage}>Send Message</Button>
      </form>
      {messages.map(message => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
