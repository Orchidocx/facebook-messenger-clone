import React, { useEffect, useState } from 'react';
import { Button, InputLabel, FormControl, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

// 1:00:16
function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a mesage...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}type="text"/>
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
        
      </form>
      {messages.map(message => (
        <Message username={message.username} text={message.text}/>
      ))}
    </div>
  );
}

export default App;
