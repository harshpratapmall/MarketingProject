import React from 'react';
import styles from './LandingPage.module.css';

function Prodsection() {

    return(


<div className={styles.product_section}>
        <div className={styles.product}>
          <img src="https://static.bodor.com/images/fiber-laser-cutting-machine/iTransTower.webp" alt="iTransTower" />
          <div>
          <h2>iTransTower</h2>
          <p>Flagship Product</p>
          <p>Intelligent loading and unloading, compact solid storage tower</p>

          </div>
          
        </div>
        <div className={styles.product}>
          <img src="https://static.bodor.com/images/fiber-laser-cutting-machine/dream.webp" alt="M Series" />
          <div>
          <h2>M Series</h2>
          <p>Flagship Product</p>
          <p>Flagship laser metal tube cutting machine</p>

          </div>
          
        </div>
        <div className={styles.product}>
          <img src="https://static.bodor.com/images/fiber-laser-cutting-machine/m.webp" alt="M5" />
          <div><h2>M5</h2>
          <p>Flagship Product</p>
          <p>Flagship fiber laser metal tube cutting machine</p></div>
          
        </div>
        <div className={styles.product}>
          <img src="https://static.bodor.com/images/fiber-laser-cutting-machine/m.webp" alt="Dream Series" />
          <div><h2>Dream Series</h2>
          <p>Flagship Product</p>
          <p>Flagship sheet fiber laser metal cutting machine</p></div>
          
        </div>
        <div className={styles.product}>
          <img src="https://static.bodor.com/images/fiber-laser-cutting-machine/q0pro.webp" alt="Q0 Pro" />
          <div><h2>Q0 Pro</h2>
          <p>High-performance Product</p>
          <p>Small tube high efficiency laser cutting machine</p></div>
          
        </div>
             </div>

    );








}


export default Prodsection;