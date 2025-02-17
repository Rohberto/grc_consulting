import React from "react";
import styles from "./Marquee.module.css";

const MarqueeSection = () => {
  const items = [
    "We have a combination of 15 years of experience in the cybersecurity space",
    "We have a combination of 15 years of experience in the cybersecurity space",
    "We have a combination of 15 years of experience in the cybersecurity space",
    "We have a combination of 15 years of experience in the cybersecurity space",
    "We have a combination of 15 years of experience in the cybersecurity space",
    "We have a combination of 15 years of experience in the cybersecurity space",
    "We have a combination of 15 years of experience in the cybersecurity space",
    "We have a combination of 15 years of experience in the cybersecurity space",
    "We have a combination of 15 years of experience in the cybersecurity space",
    "We have a combination of 15 years of experience in the cybersecurity space",
    "We have a combination of 15 years of experience in the cybersecurity space"
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.top_text}>
                <img src="/Assets/about_logo.png" alt="marquww logo"/>
                <h1>It's GRC Solutions</h1>
                </div>
              
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.marquee} ${styles.reverse}`}>
        <div className={styles.marqueeContent}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
                 <div className={styles.top_text}>
                <img src="/Assets/about_logo.png" alt="marquww logo"/>
                <h1>It's GRC Solutions</h1>
                </div>

              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
