import React from 'react';
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Driving Excellence in Governance, Risk<br/>& Compliance Solutions and Education</h1>
        <div className={styles.card_container}>
            <div className={styles.mission}>
                <h1>Our Mission</h1>
                <p>Our mission is to empower businesses and individuals with robust risk and compliance solutions. To
                    offer governance, risk and compliance education and career Development
                    through innovative technology and expert led training, which Ensures
                    a secure and compliant operationl environment.
                </p>
            </div>
            <div className={styles.vision}>
            <h1>Our Vision</h1>
                <p>
                    We aspire to be the leading provider of innovative GRC solutions, recognized for our expertise,cutting-edge technology ad commitment to client success in an ever-evoving, regulatory and risk landscape.
                </p>
            </div>
        </div>

        <div className={styles.video_container}>
            <img src='/Assets/about_video.png' alt='video container'/>
        </div>

        <div className={styles.bottom_overlay}></div>
    </div>
  )
}

export default Banner;