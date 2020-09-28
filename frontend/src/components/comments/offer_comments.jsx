import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';

let socket;

const Comments = ({ addOfferComment, offerId, currentUser, comments }) => {

  const [name] = useState(`${currentUser.firstName} ${currentUser.lastName}`);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(comments);
  const [offer, setOfferId] = useState('');
  const [currUser] = useState(currentUser);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket = io();

    setOfferId(offerId);

    scrollToBottom();

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [offerId])

  useEffect(() => {
    scrollToBottom()
  }, [])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
      scrollToBottom();
    })
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      addOfferComment({ body: message, posterId: currUser._id, offerId: offer, posterName: name })
      socket.emit('sendMessage', message, () => setMessage(''))
      setMessage('')
    }
  }

  return (
    <div>
      <ScrollToBottom>
        <div className="show-comments-list">
          {messages.map((message, i) => (
            <div key={i}>{message.posterName}: {message.body}</div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      </ScrollToBottom>
      <form>
        <input type="text"
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button onClick={(event) => sendMessage(event)}>Send</button>
      </form>
    </div>
  )

}

export default Comments;