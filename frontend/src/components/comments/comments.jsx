import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';

let socket;

const Comments = ({addAskComment, askId, currentUser, comments}) => {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(comments);
  const [ask, setAskId] = useState('');
  const [currUser] = useState(currentUser);

  useEffect(() => {
    socket = io();

    setName(`${currUser.firstName} ${currUser.lastName}`)
    setAskId(askId);

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [askId])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    })
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      addAskComment({body: message, posterId: currUser._id, askId: ask, posterName: name})
      socket.emit('sendMessage', message, () => setMessage(''))
      setMessage('')
    }
  }

  return(
    <div>
      <ScrollToBottom>
        {messages.map((message, i) => (
          <div key={i}>{message.posterName}: {message.body}</div>
        ))}
      </ScrollToBottom>
      <form>
        <input type="text"
        value={message}
        onChange={({target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null }
        />
        <button onClick={(event) => sendMessage(event)}>Send</button>
      </form>
    </div>
  )

}

export default Comments;