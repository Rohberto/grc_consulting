import React from 'react';
import styles from "./header.module.css";
import MobileMenu from './MobileMenu';
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.header_container}>
        <div className={styles.header_logo}>
            <img src="/Assets/Logo.png" alt="GNC LOGO" />
        </div>

        <ul className={styles.header_links}>
            <li className={styles.header_link}><Link href="/">Home</Link></li>
            <li className={styles.header_link}><Link href="/about">About Us</Link></li>
            <li className={styles.header_link}><Link href="/career_pathway">Career Pathway</Link></li>
            <li className={styles.header_link}><Link href="/kids">Kids Center</Link></li>
            <li className={styles.header_link}><Link href="/learning">Learning</Link></li>
            <li className={styles.header_link}><Link href="/consulting">Consulting</Link></li>
        </ul>

        <div className={styles.header_button_container}>
            <button className={styles.header_button}>Sign Up</button>
        </div>

        <MobileMenu/>
    </div>
  )
}

export default Header