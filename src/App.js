import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import "./App.css"; // Import your CSS file
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import Aboutus from "./pages/Aboutus";

// Private Route Component (Optional, for protected routes)
function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn"); // Simulate login state

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  const location = useLocation();

  return (
    <div>
      <nav>
        <div className="nav-left">
          <span>BODOR</span>
        </div>
        <div className="nav-center">
          {location.pathname !== "/" ? <Link to="/">Home</Link> :  <Link to="/" class="active-link">Home</Link>}
          {location.pathname !== "/products" ? <Link to="/products">Products</Link> : <Link to="/products" class="active-link">Products</Link>}
          {location.pathname !== "/contact" ? <Link to="/contact" >Contact</Link> : <Link to="/contact" class="active-link">Contact</Link>}
          {location.pathname !== "/about" ? <Link to="/about">About Us</Link>:<Link to="/about" class="active-link">About Us</Link> }
          {location.pathname !== "/login" ? <Link to="/login">Login</Link>:<Link to="/login" class="active-link">Login</Link> }
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
