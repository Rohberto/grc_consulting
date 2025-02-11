import React from 'react';
import styles from "./header.module.css";
import MobileMenu from './MobileMenu';
const Header = () => {
  return (
    <div className={styles.header_container}>
        <div className={styles.header_logo}>
            <img src="/Assets/Logo.png" alt="GNC LOGO" />
        </div>

        <ul className={styles.header_links}>
            <li className={styles.header_link}>Home</li>
            <li className={styles.header_link}>About Us</li>
            <li className={styles.header_link}>Career Pathways</li>
            <li className={styles.header_link}>Kids Center</li>
            <li className={styles.header_link}> Learning</li>
            <li className={styles.header_link}>Consulting</li>
        </ul>

        <div className={styles.header_button_container}>
            <button className={styles.header_button}>Sign Up</button>
        </div>

        <MobileMenu/>
    </div>
  )
}

export default Header