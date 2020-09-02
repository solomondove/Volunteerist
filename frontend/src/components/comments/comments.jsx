import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';

let socket;

const Comments = (askId, currentUser) => {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [ask, setAskId] = useState('');
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);

    setName(currentUser.firstname + " " + currentUser.lastname)
    setAskId(askId);

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [ENDPOINT, askId])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    })
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {

      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(message, messages);

  return(
    <div>
      <ScrollToBottom>
        {messages.map((message, i) => (
          <div key={i}>{message}</div>
        ))}
      </ScrollToBottom>
      <form>
        <input type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null }
        />
        <button onClick={(event) => sendMessage(event)}>Send</button>
      </form>
    </div>
  )

}

export default Comments;