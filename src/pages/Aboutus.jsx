// src/Aboutus.js
import React from 'react';
import styles from './Aboutus.module.css';
import Footer from './Footer';
import Infoabout from './Infoabout';

const Aboutus = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img
          src="https://inshop.bodor.com/cdn/shop/files/fb65157bc80203d04ef3143ad4030fc4.jpg?height=628&pad_color=fff&v=1665460086&width=1200" 
          alt="Bodor Laser"
          className={styles.image}
        />
      </div>
      <div className={styles.aboutusContainer}>
        <div className={styles.aboutusContent}>
          <h1>Introduction</h1>
          <hr className={styles.hrStyle} />
          <p className={styles.txt}>
            Bodor Laser is an international company committed to R&D, production and marketing of laser cutting machines. The company has maintained a high growth rate since its establishment in 2008.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.icon}>🏭</div>
              <div className={styles.info}>
                <h2>60000㎡</h2>
                <p>Production Base</p>
              </div>
            </div>
            <div className={styles.stat}>
              <div className={styles.icon}>🚚</div>
              <div className={styles.info}>
                <h2>10000+</h2>
                <p>Delivery Capability</p>
              </div>
            </div>
            <div className={styles.stat}>
              <div className={styles.icon}>👥</div>
              <div className={styles.info}>
                <h2>3000+</h2>
                <p>Global Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Infoabout />
      <Footer />
    </div>
  );
};

export default Aboutus;
