import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import Footer from './Footer';

// Login Page Component (Basic example, replace with authentication logic)
function LoginPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement authentication logic here (e.g., send credentials to backend)
    alert(`Thank you, ${username}, for signing up!`);
    localStorage.setItem('isLoggedIn', true);
    // Redirect or handle login success
    window.location.href = '/';
  };

  return (
    <div style={{ backgroundColor: '#f9d7c1' }}>
      <div className={styles.loginPage}>
        <div className={styles.content}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <div style={{ height: '253px' }}></div>
      <Footer />
    </div>
  );
}

export default LoginPage;
