import React, { useEffect, useState } from 'react';
import { Button, InputLabel, FormControl, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import { db } from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
    });
  }, []);
  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Facebook Messenger Logo"/>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl>
          <InputLabel>Enter a mesage...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}type="text"/>
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
        
      </form>
      <FlipMove>
        {messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
