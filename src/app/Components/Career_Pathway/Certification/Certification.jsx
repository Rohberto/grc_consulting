"use client"
import styles from "./Certifications.module.css";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Certifications = () => {
const container = useRef();
const mainContainer = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(`.${styles.certification_text_content} > *`, {
        y: 0,
        opacity: 1,
        duration: .5,
        ease: "power2.out",
        stagger: .2,
        scrollTrigger: {
          trigger: `.${styles.certification_text_content}`,
          start: "top center",
          end: "top top", 
          scrub: true
        }
      })

      gsap.to(`.${styles.certification_images} > *`, {
        x: 0,
        opacity: 1,
        duration: .5,
        stagger: .5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.certification_images}`,
          start: "top center",
          end: "top top", 
          scrub: true
        }
      })

      gsap.from(`.${styles.statistics_container} h1 span`, {
        y: "100%",
        skewY: 10,
        opacity: 0,
        stagger: .5,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `${styles.statistics_container}`,
          start: "top bottom",
          end: "top center", 
          scrub: true
        }
      })
  
      document.querySelectorAll(`.percentage`).forEach((el) => {
        let targetValue = el.getAttribute("data-value")    
        let randomStart = Math.floor(Math.random() * 50)
  console.log("yeah")
        gsap.fromTo(el, {
          innerHTML: randomStart
        }, {
          innerHTML: targetValue,
          duration: 2,
          delay: 1,
          ease: "power2.out",
          scrollTrigger:
          {
            trigger:  el,
          start: "top bottom",
          toggleActions: "play none none none"
          },
          snap: {innerHTML: 1},
          onUpdate: function () {
            el.innerHTML = Math.round(el.innerHTML) + "%";
          }
        })
  
      })

  })

  return (
    <section className={styles.certificationsSection}>
       
       <div className={styles.certification_content}>
            <div className={styles.certification_text_content} ref={container}>
                <h1>Recognized Excellence.<br/>Certified Expertise.<br/> Proven Quality.</h1>
            <p>Our certifications reflect our unwavering commitment to quality, compliance, and industry leadership. They underscore the trust we’ve built through our expertise and dedication, showcasing our drive to exceed expectations and deliver excellence in everything we do.</p>
            </div>

            <div className={styles.certification_images}>
                <img src="/Assets/isc.png" alt="ISC" />
                <img src="/Assets/purple.png" alt="Purple" />
                <img src="/Assets/comptia.png" alt="comptia" />
            </div>
        </div>

        <div className={styles.statistics_container}>
            <h1> <span>Key Statistics</span></h1>
            <div className={styles.statistic_container} ref={mainContainer}>
                <div className={styles.statistic}>
                    <h1  className={"percentage"} data-value="58">0%</h1>
                    <p>Of GRC professionals report that certifications 
                        (have been essential to their career progression.</p>
                </div>
                <div className={styles.statistic}>
                    <h1  className={"percentage"} data-value="68">0%</h1>
                    <p>Of GRC professionals report that certifications 
                        (have been essential to their career progression.</p>
                </div>
                <div className={styles.statistic}>
                    <h1  className={"percentage"} data-value="35">0%</h1>
                    <p>Of GRC professionals report that certifications 
                        (have been essential to their career progression.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Certifications;

