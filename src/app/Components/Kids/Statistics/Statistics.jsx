"use client"
import React, {useRef} from 'react';
import styles from "./Statistics.module.css";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Statistics = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(`.${styles.statistics_container} h1 span`, {
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
    <div className={styles.statistics_container} ref={container}>
    <h1>
      <span>Key Statistics</span></h1>
    <div className={styles.statistic_container}>
        <div className={styles.statistic}>
            <h1 className={"percentage"} data-value="1331">0%</h1>
            <p>cyber incidents targeting U.S. schools between 2016 and 2022, with a rise in incidents each year.</p>
        </div>
        <div className={styles.statistic}>
            <h1 className={"percentage"} data-value="25">0%</h1>
            <p>of middle and high school students in the United States reported being cyberbullied.</p>
        </div>
        <div className={styles.statistic}>
            <h1 className={"percentage"} data-value="91">0%</h1>
            <p>of children aged 10-15 use the internet daily in the U.S. However, many lack the understanding of what constitutes safe and ethical behavior online.</p>
        </div>
    </div>

    <img src="/Assets/fifth_left.png" className={styles.background_overlay_left} alt=''/>
        <img src="/Assets/fifth_right.png" className={styles.background_overlay_right} alt=''/>
      <div className={styles.wavy_image}>
        <img src="/Assets/wavy5.png" alt='wavy image'/>
      </div>
</div>
  )
}

export default Statistics