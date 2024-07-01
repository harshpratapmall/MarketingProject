import React from 'react';
import styles from './LandingPage.module.css';
function Infobox() {

    return(


<div className={styles.info_boxes}>
        <div className={styles.info_box}>
          <h2>Fast response within 0.5 hours</h2>
          <p>Customers are responded within 0.5 hours.</p>
        </div>
        <div className={styles.info_box}>
          <h2>One-to-one product solution</h2>
          <p>Our senior professional engineers will provide the most suitable product solutions according to customer demand.</p>
        </div>
        <div className={styles.info_box}>
          <h2>Year-round worry-free service</h2>
          <p>Professional laser cutting consultation is available both online and offline.</p>
        </div>
      </div>

    );








}


export default Infobox;