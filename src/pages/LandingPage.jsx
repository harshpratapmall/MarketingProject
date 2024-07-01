import React from 'react';
import styles from './LandingPage.module.css';
import Infobox from './Infobox';
import Prodsection from './Prodsection';
import Footer from './Footer';

function LandingPage() {
  return (
    <div className={styles.landing_page}>
      <div className={styles.hero}>
        <h1>Welcome to BODOR</h1>
        <p>Dare To Dream</p>
      </div>

      <Prodsection/>
      <Infobox/>
      <Footer/>      
    </div>
  );
}

export default LandingPage;
