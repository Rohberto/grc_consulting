"use client"
import React, {useRef} from 'react';
import styles from "./Program.module.css";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Program = () => {
  const container = useRef();
  const contentContainer = useRef();
 useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(`.${styles.header} span`, {
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

    gsap.to(`.${styles.text_container} ul li`, {
      y: 0,
      opacity: 1,
      duration: .5,
      ease: "power2.out",
      stagger: .5,
      scrollTrigger: {
        trigger: contentContainer.current,
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
        trigger: contentContainer.current,
        start: "top center",
        end: "bottom bottom", 
        scrub: true
      }
      })
    })
  return (
    <div className={styles.container} ref={container}>
        <h1 className={styles.header}>
           <span> Why This Program?</span>
        </h1>

        <div className={styles.content_container} ref={contentContainer}>
            <div className={styles.text_container}>
                <ul>
                    <li><img src='/Assets/list_1.png' alt='list-counter'></img> Mission
                    Helps schools fulfill their digital citizenship requirements.</li>
                    <li><img src='/Assets/list_2.png' alt='list-counter'></img> Mission
2
Empowers students to become more responsible and aware digital users, especially in online gaming environments.</li>
                    <li><img src='/Assets/list_3.png' alt='list-counter'></img> Mission
3
Equips kids with the knowledge to stay safe and make smart decisions while gaming online.</li>
                </ul>
            </div>
            <div className={styles.image_container}>
                <img src="/Assets/kiddies_2.png" alt="kiddies_images"/>
            </div>
        </div>

        
   <img src="/Assets/fourth_left.png" className={styles.background_overlay_left} alt=''/>
        <img src="/Assets/fourth_right.png" className={styles.background_overlay_right} alt=''/>
      <div className={styles.wavy_image}>
        <img src="/Assets/wavy4.png" alt='wavy image'/>
      </div>
    </div>
  )
}

export default Program