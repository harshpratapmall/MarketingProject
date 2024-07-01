// src/Infoabout.js
import React from 'react';
import styles from './Infoabout.module.css';

function Infoabout() {
  return (
    <div className={styles.serviceSection}>
      <h1 className={styles.serviceHeading}>BODOR Services</h1>
      <div className={styles.infoBoxes}>
        <div className={styles.infoBox}>
          <h2>Problem solution within 24 hours</h2>
          <p>150+ overseas service engineers give an immediate on-site visit and solve problems.</p>
        </div>
        <div className={styles.infoBox}>
          <h2>Spare parts support</h2>
          <p>30 overseas spare part centers ensure that customers can change spare parts in time.</p>
        </div>
        <div className={styles.infoBox}>
          <h2>BodorCloud</h2>
          <p>The independently developed service system alarms automatically when there is a problem.</p>
        </div>
      </div>
    </div>
  );
}

export default Infoabout;
