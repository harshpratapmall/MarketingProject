import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css'; // Import your CSS file
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

// Private Route Component (Optional, for protected routes)
function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Simulate login state

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className="nav-left">
          <span>BODOR</span>
        </div>
        <div className="nav-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">Login</Link>
          <Link to="/contact">Contact</Link>
        </div>
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
