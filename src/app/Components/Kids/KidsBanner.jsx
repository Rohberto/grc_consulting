import React from 'react';
import styles from "./KidsBanner.module.css";

const KidsBanner = () => {
  return (
    <section className={styles.container}>
        <div className={styles.KidsBannerContentContainer}>
            <div className={styles.Kids_banner_content}>
                <h1>Cyber Safety Starts with Our Kids</h1>
                <p>Empowering young minds to stay safe online with fun, interactive lessons on cyber safety and digital responsibility.</p>
                <button>Contact Us</button>
            </div>
            <div className={styles.Kids_banner_image_container}>
                <img src='/Assets/kids.png' alt='kids graphical representation'/>
            </div>
        </div>
        <button className={styles.kids_button}>Contact Us</button>
        <img src="/Assets/first_left.png" className={styles.background_overlay_left} alt=''/>
        <img src="/Assets/first_right.png" className={styles.background_overlay_right} alt=''/>
      <div className={styles.wavy_image}>
        <img src="/Assets/wavy.png" alt='wavy image'/>
      </div>
    </section>
  )
}

export default KidsBanner;