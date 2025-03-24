"use client"
import React from 'react';
import styles from "./KidsBanner.module.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const KidsBanner = () => {
  const tl1 = gsap.timeline({
    delay: 1.5,
  });
  useGSAP(() => {
   let mm = gsap.matchMedia();
   mm.add("(min-width: 768px)", () => {
       tl1.from(`.${styles.Kids_banner_content} h1 span`, {
           y: "100%",
           skewY: 10,
           opacity: 0,
           stagger: .5,
           duration: 1,
           ease: "power2.out"
       }).from(
           `.${styles.Kids_banner_image_container} img`, {
               x: "100%",
               opacity: 0,
               duration: 1.2,
               ease: "power2.out"
             
           }, "<40%"
       ). from(`.${styles.Kids_banner_content} p`
           , {
             y: 100,
             opacity: 0,
             skewY: 10,
             duration: 1,
             stagger: .2,
             ease: "power2.out"
           }).from(`.${styles.Kids_banner_content} a button`, {
               y: 100,
               opacity: 0,
               skewY: 10,
               duration: 1,
               stagger: .2,
               ease: "power2.out"
           })
   })

   mm.add("(max-width: 768px)", () => {
       tl1.from(`.${styles.Kids_banner_content} h1 span`, {
           y: "100%",
           skewY: 10,
           opacity: 0,
           stagger: .5,
           duration: 1,
           ease: "power2.out"
       }, "<50%"). from(`.${styles.Kids_banner_content} p`
           , {
             y: 100,
             opacity: 0,
             skewY: 6,
             duration: .6,
             ease: "power2.out"
           }).from(
               `.${styles.Kids_banner_image_container} img`, {
                   x: "100%",
                   opacity: 0,
                   duration: 1,
                   ease: "power2.out"
                 
               }
           ) .from(`.${styles.kids_button}`, {
               y: 100,
               opacity: 0,
               skewY: 10,
               duration: 1,
               stagger: .2,
               ease: "power2.out"
           })
   })
  
})
  return (
    <section className={styles.container}>
        <div className={styles.KidsBannerContentContainer}>
            <div className={styles.Kids_banner_content}>
                <h1><span>Cyber Safety Starts with Our Kids</span></h1>
                <p>Welcome to the ITG Digital Defenders Program - a dynamic, online learning experience
that equips students with essential digital safety and cybersecurity skills. Our program is
carefully designed to support classrooms, after-school programs, community centers,
and parents/guardians providing engaging educational content that inspires confidence
and builds the foundation to empower young minds to stay staff online.</p>
                <a href='#contact' rel='no_referrer'> <button>Contact Us</button></a>
            </div>
            <div className={styles.Kids_banner_image_container}>
                <img src='/Assets/kids.png' alt='kids graphical representation'/>
            </div>
        </div>
        <a href='#contact' rel='no_referrer'><button className={styles.kids_button}>Contact Us</button></a>
        <img src="/Assets/first_left.png" className={styles.background_overlay_left} alt=''/>
        <img src="/Assets/first_right.png" className={styles.background_overlay_right} alt=''/>
      <div className={styles.wavy_image}>
        <img src="/Assets/wavy.png" alt='wavy image'/>
      </div>
    </section>
  )
}

export default KidsBanner;