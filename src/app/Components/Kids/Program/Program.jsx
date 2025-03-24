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

    gsap.to(`.${styles.text_container} ul h1`, {
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
           <span> Who Can Benefit?</span>
        </h1>

        <div className={styles.content_container} ref={contentContainer}>
            <div className={styles.text_container}>
                <ul>
                  <h1>Students</h1>
                    <li><img src='/Assets/list_1.png' alt='list-counter'></img> <span><b>Learn at Your Own Pace:</b> Interactive modules and fun activities designed to make
                    learning about cybersecurity engaging and accessible.</span></li>
                    <li><img src='/Assets/list_2.png' alt='list-counter'></img> <span><b>Build Future Skills:</b> Gain foundational knowledge that can lead to exciting careers
                    in STEM and technology.</span></li>
                </ul>

                <ul>
                  <h1>Teachers</h1>
                    <li><img src='/Assets/list_1.png' alt='list-counter'></img> <span><b>Seamless Curriculum Integration:</b> Use our comprehensive lesson plans and
                    resources to enhance your classroom curriculum.</span></li>
                    <li><img src='/Assets/list_2.png' alt='list-counter'></img> <span><b>Empower Your Students:</b> Provide practical, hands-on experience in cybersecurity
                    and digital safety.</span></li>
                </ul>

                <ul>
                  <h1>Parents & Community Leaders</h1>
                    <li><img src='/Assets/list_1.png' alt='list-counter'></img> <span><b>Support & Engage:</b>Access resources that help you understand cybersecurity,
                    so you can guide and support young learners.</span></li>
                    <li><img src='/Assets/list_2.png' alt='list-counter'></img> <span><b>Build Safer Digital Spaces:</b> Learn practical tips and strategies to keep your family
                    and community safe online.</span></li>
                </ul>

                <ul>
                  <h1>Schools & Community Centers</h1>
                    <li><img src='/Assets/list_1.png' alt='list-counter'></img> <span><b>Flexible, Onlie Delivery:</b> Our program adapts to your schedule and existing
infrastructure, offering a valuable addition to after-school programs or
extracurricular activities.</span></li>
                    <li><img src='/Assets/list_2.png' alt='list-counter'></img> <span><b>Enhance Community Education:</b> Bring together students, educators, and parents
                    in a unified approach to digital safety and cybersecurity awareness.</span></li>
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