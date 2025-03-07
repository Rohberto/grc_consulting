"use client"
import React from 'react';
import styles from "./Navigation.module.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navigation = () => {
  const tl2 = gsap.timeline({
    delay: 1
  });
  useGSAP(() => {
    tl2.from(`.${styles.navigation_header} span`, {
        y: "100%",
        skewY: 10,
        opacity: 0,
        stagger: .5,
        duration: 1,
        ease: "power2.out"
    }).from(`.${styles.navigation_links}`, {
      y: 60,
      opacity: 0,
      skewY: 10,
      duration: 1,
      stagger: .2,
      ease: "power2.out"

    })
  })
  return (
    <div className={styles.navigation_container}>
        <h1 className={styles.navigation_header}>
           <span>Career Pathway</span> 
        </h1>

        <p className={styles.navigation_links}> Home / <span className={styles.navigation_link}>career_pathway</span></p>
    </div>
  )
}

export default Navigation