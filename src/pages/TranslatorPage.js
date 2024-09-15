import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './TranslatorPage.css';

const TranslatePage = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');

  const handleTranslate = () => {
    setTranslatedText(`Translated "${sourceText}" from ${sourceLang} to ${targetLang}`);
  };

  return (
    <div className="translate-page">
      <div className="translate-container">
        <button className="back-button" onClick={() => navigate(-1)}>Back</button> 
        <h1 className="translate-title">Language Translator</h1> 

        <div className="translate-form">
          <textarea
            className="source-text"
            placeholder="Enter text to translate..."
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
          />
          <div className="language-selector">
            <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              {/* Add more language options as needed */}
            </select>
            <span>to</span>
            <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              {/* Add more language options as needed */}
            </select>
          </div>
          <button className="translate-button" onClick={handleTranslate}>Translate</button>
        </div>

        <div className="translation-output">
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      </div>
    </div>
  );
};

export default TranslatePage;
