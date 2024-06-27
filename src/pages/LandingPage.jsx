import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function LandingPage() {
  return (
    <div className={styles.landing_page}>
      <div className={styles.hero}>
        <h1>Welcome to BODOR</h1>
        <p>Dare To Dream</p>
            </div>
      <footer className={styles.footer}>
        <Link to="/contact" className={styles.contact_button}>Contact Us</Link>
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
