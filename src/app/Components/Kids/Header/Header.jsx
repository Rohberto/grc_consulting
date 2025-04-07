"use client"
import React, {useRef} from 'react';
import styles from "./header.module.css";
import MobileMenu from './MobileMenu';
import Link from "next/link";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = () => {

  const header = useRef();
  const tl = gsap.timeline();
  
    useGSAP(() => {
      tl.from([`.${styles.header_logo} `, `.${styles.header_link}`, `.${styles.header_button_container}`]
        , {
          y: -100,
          opacity: 0,
          duration: 1,
          stagger: .2,
          ease: "power2.out"
        })
    })

  return (
    <div className={styles.header_container} ref={header}>
        <div className={styles.header_logo}>
            <img src="/Assets/kid_logo.png" alt="GNC LOGO" />
        </div>

        <ul className={styles.header_links}>
            <li className={styles.header_link}><Link href="/">Home</Link></li>
            <li className={styles.header_link}><Link href="/about">About Us</Link></li>
            <li className={styles.header_link}><Link href="/career_pathway">Career</Link></li>
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