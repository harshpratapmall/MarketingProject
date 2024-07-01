import React from 'react';
import { useState } from "react";
import styles from './LoginPage.module.css'
import Footer from './Footer';

// Login Page Component (Basic example, replace with authentication logic)
function LoginPage() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Thank you, ${username}, for submitting your details`);
      localStorage.setItem('isLoggedIn', true);
      window.location.href = "/";
    };
  
    return (
      <div><div className="signup-page">
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
    <Footer/>  
    </div>
      
    );
  
}

export default LoginPage;
