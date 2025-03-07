"use client"
import React from 'react';
import styles from "./DigitalDefender.module.css";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';


const DigitalDefender = () => {
  const container = useRef();
  const lowerContainer = useRef();
  const mobileButtons = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      gsap.to(`.${styles.mobile_buttons} > *`, {
        x: 0,
        opacity: 1,
        duration: .5,
        stagger: .5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileButtons.current,
          start: "top center",
          end: "top top", 
          scrub: true
        }
      })
    })
    gsap.from(`.${styles.digital_upper_content} h1 span`, {
      y: "100%",
      skewY: 10,
      opacity: 0,
      stagger: .5,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "top top", 
        scrub: true
      }
    })
    gsap.to(`.${styles.digital_upper_content} p`, {
      y: 0,
      opacity: 1,
      duration: .5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "top top", 
        scrub: true
      }
    })
   gsap.to(`.${styles.buttons_container} > *`, {
      x: 0,
      opacity: 1,
      duration: .5,
      stagger: .5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "top top", 
        scrub: true
      }
    })
    gsap.to(`.${styles.image_container} img`,{
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
       scale: 1,
      duration: 2,
      ease: "power2",
      scrollTrigger: {
        trigger: lowerContainer.current,
        start: "top center",
        end: "top top", 
        scrub: true
      }
      })
      gsap.to([`.${styles.content_container} h1`, `.${styles.content_container} p`], {
        y: 0,
        opacity: 1,
        duration: .5,
        ease: "power2.out",
        stagger: .5,
        scrollTrigger: {
          trigger: lowerContainer.current,
          start: "top center",
          end: "top top", 
          scrub: true
        }
      })
  })
  return (
    <div className={styles.container} ref={container}>
        <div className={styles.digital_upper_content}>
            <h1>
               <span> ITG Digital Defenders</span>
            </h1>
            <p>Through our Digital Defenders program we strive to educate young learners on safe internet practices, digital citizenship, and the fundamentals of cybersecurity, with a special focus on online gaming safety.</p>
            <div className={styles.buttons_container}>
                <button className={styles.green_button}>K-2nd Grade</button>
                <button className={styles.white_button}>3-5th Grade</button>
                <button className={styles.white_button}>6-8th Grade</button>
                <button className={styles.white_button}>9-12th Grade</button>
            </div>
        </div>
        <div className={styles.digital_lower_content} ref={lowerContainer}>
            <div className={styles.image_container}>
                <img src='/Assets/kiddies.png' alt='Kids Images'/>
            </div>
            <div className={styles.content_container}>
                <h1>Introduction to Digital Safety.</h1>
                <p>Focus: We focus on exploring basic concepts of privacy, identifying trusted adults, and understanding "stranger danger" online.
                <br/>
                <br/>
                students will gain an understanding of knowing which games are age-appropriate and why it's important to only play with friends they know in real life.</p>
            </div>
        </div>
        <div className={styles.mobile_buttons} ref={mobileButtons}>
        <button className={styles.white_button}>3-5th Grade</button>
                <button className={styles.white_button}>6-8th Grade</button>
                <button className={styles.white_button}>9-12th Grade</button>
        </div>
        <img src="/Assets/second_left.png" className={styles.background_overlay_left} alt=''/>
        <img src="/Assets/second_right.png" className={styles.background_overlay_right} alt=''/>
      <div className={styles.wavy_image}>
        <img src="/Assets/wavy2.png" alt='wavy image'/>
      </div>
    </div>
  )
}

export default DigitalDefender