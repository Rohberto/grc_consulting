"use client"
import React, {useRef} from 'react';
import styles from "./Delivery.module.css";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


const Delivery = () => {
  const container = useRef();
  const cardContainer = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      gsap.to(`.${styles.card}`, {
        x: 0,
        opacity: 1,
        duration: .5,
        stagger: .5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardContainer.current,
          start: "top center",
          end: "bottom bottom", 
          scrub: true
        }
      })
    })
    mm.add("(min-width: 768px)", () => {
      gsap.to(`.${styles.card}`, {
        x: 0,
        opacity: 1,
        duration: .5,
        stagger: .5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom bottom", 
          scrub: true
        }
      })
    })

    gsap.to([`.${styles.delivery_header}`, `.${styles.delivery_description}`], {
      y: 0,
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
   
 
  })
  return (
    <div className={styles.delivery_container}ref={container}>
        <h1 className={styles.delivery_header}>DIGITAL DOWNLOADS</h1>
        <p className={styles.delivery_description}>
        Enhance your learning experience with our collection of downloadable resources.
Whether you’re a teacher looking for ready-to-use lesson plans, a student seeking extra
practice, or a parent eager to support digital safety at home, our digital downloads
provide valuable, on-demand content to supplement the ITG Digital Defenders Program.
        </p>
   
   <div className={styles.delivery_cards_container} ref={cardContainer}>
        <div  className={`${styles.card} ${styles.card_one}`}>
            <div className={styles.card_image}>
                <img src="/Assets/frame.png" at="kids_frame"/>
            </div>
            <h3>Online Learning Platform</h3>
            <p>Self-paced courses with video lessons, interactive quizzes, and discussion forums</p>
        </div>
        <div className={`${styles.card} ${styles.card_two}`}>
            <div className={styles.card_image}>
                <img src="/Assets/frame1.png" at="kids_frame"/>
            </div>
            <h3>Customized training packages</h3>
            <p>Training programs developed based on the school or organizations needs</p>
        </div>
        <div className={`${styles.card} ${styles.card_three}`}>
            <div className={styles.card_image}>
                <img src="/Assets/frame2.png" at="kids_frame"/>
            </div>
            <h3>In-Person Workshops</h3>
            <p>Facilitated by trained instructors, available for school assemblies, classroom sessions, and community centers.</p>
        </div>
   </div>

   <img src="/Assets/third_left.png" className={styles.background_overlay_left} alt=''/>
        <img src="/Assets/third_right.png" className={styles.background_overlay_right} alt=''/>
      <div className={styles.wavy_image}>
        <img src="/Assets/wavy3.png" alt='wavy image'/>
      </div>
    </div>
  )
}

export default Delivery