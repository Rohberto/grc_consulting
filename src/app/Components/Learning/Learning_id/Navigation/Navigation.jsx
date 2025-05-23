"use client"
import React from 'react';
import styles from "./Navigation.module.css";


const Navigation = ({title}) => {
  return (
    <div className={styles.navigation_container}>
        <h1 className={styles.navigation_header}>
         {title}
        </h1>
        <p className={styles.navigation_subtitle}>
          ITG GRC CONSULTING
          Security Awareness Analyst Training Program
          (Security+ & SACP Certification Track.)
        </p>
        <div className={styles.info_container}>
          <div className={styles.review}>
            <h3>Review</h3>
            {
              Array.from({length: 5}).map((_,index) => (
                <img src="/Assets/star.png" alt="star_review"
                key={index}/>
              ))
            }
          </div>
          <div className={styles.duration}>
            <h3>Duration </h3>
            <p>198hrs 30mins</p>
          </div>
          <div className={styles.language}>
          <h3>Language </h3>
          <p>English</p>
          </div>
        </div>
        <p className={styles.navigation_links}> Home/Learning/<span className={styles.navigation_link}>Course Details</span></p>
    </div>
  )
}

export default Navigation;