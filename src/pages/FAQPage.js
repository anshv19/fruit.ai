import React, { useState } from 'react';
import './FAQPage.css';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [faqs, setFaqs] = useState([
    { id: 1, question: 'What are the health benefits of eating apples?', answer: 'Apples are rich in vitamins and fiber, which can aid in digestion, reduce the risk of chronic diseases, and help with weight management.' },
    { id: 2, question: 'How does vitamin C in oranges benefit health?', answer: 'Vitamin C in oranges supports the immune system, promotes healthy skin, and helps in the absorption of iron from plant-based foods.' },
    { id: 3, question: 'Are bananas good for heart health?', answer: 'Yes, bananas are high in potassium, which helps regulate blood pressure and supports heart health.' },
    { id: 4, question: 'Can eating berries improve brain function?', answer: 'Berries are rich in antioxidants and vitamins that may improve brain function and delay cognitive decline.' }
  ]);
  const [newFAQ, setNewFAQ] = useState({ question: '', answer: '' });
  const [editFAQ, setEditFAQ] = useState(null);

  const handleAddFAQ = () => {
    if (newFAQ.question && newFAQ.answer) {
      setFaqs([...faqs, { ...newFAQ, id: faqs.length + 1 }]);
      setNewFAQ({ question: '', answer: '' });
    }
  };

  const handleEditFAQ = (id) => {
    setEditFAQ(faqs.find(faq => faq.id === id));
  };

  const handleUpdateFAQ = () => {
    setFaqs(faqs.map(faq => faq.id === editFAQ.id ? editFAQ : faq));
    setEditFAQ(null);
  };

  const handleDeleteFAQ = (id) => {
    setFaqs(faqs.filter(faq => faq.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editFAQ) {
      setEditFAQ({ ...editFAQ, [name]: value });
    } else {
      setNewFAQ({ ...newFAQ, [name]: value });
    }
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <Link to="/home" className="back-button">Back</Link> 
        <h1 className="faq-title">Frequently Asked Questions</h1>

        {/* Add New FAQ */}
        <div className="faq-form">
          <h2>{editFAQ ? 'Edit FAQ' : 'Add New FAQ'}</h2>
          <input
            type="text"
            name="question"
            placeholder="Question"
            value={editFAQ ? editFAQ.question : newFAQ.question}
            onChange={handleChange}
          />
          <textarea
            name="answer"
            placeholder="Answer"
            value={editFAQ ? editFAQ.answer : newFAQ.answer}
            onChange={handleChange}
          />
          <button onClick={editFAQ ? handleUpdateFAQ : handleAddFAQ}>
            {editFAQ ? 'Update FAQ' : 'Add FAQ'}
          </button>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <h2 className="faq-question">{faq.question}</h2>
              <p className="faq-answer">{faq.answer}</p>
              <button onClick={() => handleEditFAQ(faq.id)} className="edit-button">Edit</button>
              <button onClick={() => handleDeleteFAQ(faq.id)} className="delete-button">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage; 
