"use client";
import React from 'react';
import styles from "./Banner.module.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useRef } from 'react';

const Banner = () => {
    const container = useRef();
    const imgcontainer = useRef();

    useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger);
      let mm = gsap.matchMedia();
      gsap.from(`.${styles.title} span`, {
        y: "100%",
        skewY: 10,
        opacity: 0,
        stagger: .5,
        duration: 1,
        ease: "power2.out",
       delay: 2
    })
      mm.add("(min-width: 200px)", () => {

  

          gsap.to(`.${styles.video_container} img`,{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
             scale: 1,
            duration: 2,
            ease: "power2",
            scrollTrigger: {
              trigger: container.current,
              start: "top top",
              end: "bottom center", 
              scrub: true
            }
            })
         
      })
    })
  return (
    <div className={styles.container} ref={container}>
        <h1 className={styles.title}><span>Driving Excellence in Governance, Risk</span><br/><span>& Compliance Solutions and Education</span></h1>
        <div className={styles.card_container}>
            <div className={styles.mission}>
                <h1>Our Mission</h1>
                <p>Our mission is to empower businesses and individuals with robust risk and compliance solutions. To
                    offer governance, risk and compliance education and career Development
                    through innovative technology and expert led training, which Ensures
                    a secure and compliant operationl environment.
                </p>
            </div>
            <div className={styles.vision}>
            <h1>Our Vision</h1>
                <p>
                    We aspire to be the leading provider of innovative GRC solutions, recognized for our expertise,cutting-edge technology ad commitment to client success in an ever-evoving, regulatory and risk landscape.
                </p>
            </div>
        </div>

        <div className={styles.video_container} ref={imgcontainer}>
            <img src='/Assets/about_video.png' alt='video container'/>
        </div>

        <div className={styles.bottom_overlay}></div>
    </div>
  )
}

export default Banner;