import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css'; // Import your CSS file
import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage';


// Login Page Component (Basic example, replace with authentication logic)
function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace with actual authentication logic
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isLoggedIn', true); // Simulate login state
      window.location.href = "/"; // Redirect to landing page after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}



// Private Route Component (Optional, for protected routes)
function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Simulate login state

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Landing</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
