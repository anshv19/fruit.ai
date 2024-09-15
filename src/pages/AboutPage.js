import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <Link to="/home" className="back-button">Back</Link> 
        <h1 className="about-title">Fruit.Ai</h1>
        <p className="about-text">
          Whether you're looking to discover new fruits, understand their nutritional values, 
          or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. 
          We provide personalized fruit recommendations tailored to your health needs, making 
          it easier for you to integrate the best fruits into your daily routine.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
