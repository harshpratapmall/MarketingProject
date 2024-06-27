import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function LandingPage() {
  return (
    <div className={styles.landing_page}>
      <nav className={styles.navbar}>
        <div className={styles.nav_links}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <div className={styles.hero}>
        <h1>Welcome to Our Marketing Website!</h1>
        <p>Boost your brand and reach new heights with innovative strategies.</p>
        <Link to="/contact">Contact Us</Link>
      </div>
      <p>Leverage cutting-edge technology and expert solutions to elevate your business.</p>
      <footer className={styles.footer}>
        <div className={styles.social_icons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      
        <p>&copy; 2024 BODOR</p>
      </footer>
    </div>
  );
}

export default LandingPage;
