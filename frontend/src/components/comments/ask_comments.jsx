import React, { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';

let socket;

const Comments = ({addAskComment, askId, currentUser, comments}) => {

  const [name] = useState(`${currentUser.firstName} ${currentUser.lastName}`);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(comments);
  const [ask, setAskId] = useState('');
  const [currUser] = useState(currentUser);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket = io();

    setAskId(askId);

    scrollToBottom();

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [askId]);

  useEffect(() => {
    scrollToBottom()
  }, [])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
      scrollToBottom();
    })
  }, [messages]);

  
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
  
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
        <div className="show-comments-list">
          {messages.map((message, i) => (
            <div key={i} className="comment">{message.posterName}: {message.body}</div>
            ))}
        <div ref={messagesEndRef}></div>
        </div>
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