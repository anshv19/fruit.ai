import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatbotPage.css';

const ChatPage = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate a response from the chatbot
      setTimeout(() => {
        setMessages([...messages, { text: input, sender: 'user' }, { text: 'This is a response from the bot.', sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <h1 className="chat-title">Chat with Fruit.Ai</h1>

        <div className="chat-box">
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>

        <div className="input-area">
          <textarea
            className="message-input"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send-button" onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
