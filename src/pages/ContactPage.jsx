import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import Footer from './Footer';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement form submission logic here (e.g., send email or store data)
    alert(`Thank you, ${name}, for contacting us! We will get back to you soon.`);
    setName('');
    setEmail('');
    setMessage('');
    // Redirect or handle submission success
  };

  return (
    <div style={{ backgroundColor: '#f9d7c1' }}>
      <div className={styles.contactPage}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div style={{ height: '253px' }}></div>
      <Footer />
    </div>
  );
}

export default ContactPage;
