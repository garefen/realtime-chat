import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './config';


function App() {
  const [ messages, setMessages ] = useState({});
  const [ textInput, setTextInput ] = useState("");
  const [ username, setUsername ] = useState("");
 
  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const randomId = Math.floor(Math.random() * 100000000000000);
    const now = new Date().toISOString();

    let user;
    if (username === "") {
      user = "Default"
    } else {
      user = username
    }
    const newMessagePushed = fire.database().ref(`/messages/firebase`).push();
    newMessagePushed.set({
      text: textInput,
      username: user
    })

    setTextInput('');
  }

  const handleNewMessage = (newMessages) => {
    if (newMessages) setMessages(newMessages);
  }

  useEffect(() => {
    const lookForMessages = fire.database().ref(`/messages/firebase`).orderByChild('sendAt');
    lookForMessages.on('value', (snapshot) => {
      handleNewMessage(snapshot.val());
      console.log(snapshot.val())
    });
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleMessageSubmit}>
        <div className="username" value={username} onChange={(e) => { setUsername(e.target.value) }}>
          <label>Informe seu nome:</label>
          <input type="text" />
        </div>
        <div className="message-input">
          <input type="text" value={textInput} onChange={(e) => { setTextInput(e.target.value) }}/>
          <button type="submit" >Enviar</button>
        </div>
      </form>
      <div className="messages">
        {Object.values(messages).map((value) => {
          return <div><span>{value.username}</span>: {value.text}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
