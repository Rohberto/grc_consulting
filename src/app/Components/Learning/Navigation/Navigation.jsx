"use client"
import React from 'react';
import styles from "./Navigation.module.css";


const Navigation = () => {
  return (
    <div className={styles.navigation_container}>
        <h1 className={styles.navigation_header}>
          Learning
        </h1>

        <p className={styles.navigation_links}> Home / <span className={styles.navigation_link}>learning</span></p>
    </div>
  )
}

export default Navigation;