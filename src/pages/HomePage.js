import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <h1 className="app-title">Fruit.Ai</h1>
      <p className="app-subtitle">"Be Healthy!"</p>
      
      <div className="grid-container">
        <div className="grid-item chat">
          <a href="/chatbot" className="item-text">Chat</a>
        </div>
        <div className="grid-item translate">
          <a href="/translator" className="item-text">Translate</a>
        </div>
        <div className="grid-item faqs">
          <a href="/faq" className="item-text">FAQs</a>
        </div>
        <div className="grid-item about">
          <a href="/about" className="item-text">About</a> 
        </div>
      </div>
    </div>
  );
}

export default HomePage;
