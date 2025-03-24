"use client"
import React from 'react';
import styles from "./DigitalDefender.module.css";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { MenuItem } from '@headlessui/react';


const DigitalDefender = () => {
  const container = useRef();
  const lowerContainer = useRef();
  const mobileButtons = useRef();
  const [openGrade, setOpenGrade] = useState(null);

  const toggleDropdown = (grade) => {
    setOpenGrade(openGrade === grade ? null : grade);
  };
  const gradeData = [
    {
      title: 'K-2nd Grade',
      content: 'Focus: We focus on exploring basic concepts of privacy, identifying trusted adults, and understanding “stranger danger” online. Students will gain an understanding of knowing which games are age-appropriate and why it’s important to only play with friends they know in real life.'
    },
    {
      title: '3rd-5th Grade',
      content: 'Focus: We focus on safe browsing, recognizing secure websites, basic password creation, and understanding cyberbullying. Students will gain an understanding of in-game chat risks, not sharing personal information in games, and reporting suspicious behavior.'
    },
    {
      title: '6th-8th Grade',
      content: 'Focus: We focus on exploring Social media awareness, privacy settings, the importance of secure passwords, understanding phishing and smartphone best practices. Students will gain an understanding of recognizing scams and in-game purchases, using privacy settings on gaming platforms, and managing screen time.'
    },
    {
      title: '9th-12th Grade',
      content: 'Focus: We focus on cyber threats like phishing, ransomware, online scams, and digital footprints. Students will gain an understanding of digital currency, recognizing predatory behavior, and protecting personal information on streaming and social media platforms.'
    }
  ];
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

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
               <span> ITG DIGITAL DEFENDERS</span>
            </h1>
            <p>Through our Digital Defenders program we strive to educate young learners on safe internet practices, digital citizenship, and the fundamentals of cybersecurity, with a special focus on online gaming safety.</p>
            <div className={styles.buttons_container}>
              {gradeData.map((item, index) => (
                  <div key={index} className={`${styles.button_container} ${ openGrade === index ? styles.active_container : ""}`}>
                  <button className={`${ openGrade === index ? styles.white_button : styles.green_button}`} onClick={() => toggleDropdown(index)}>{item.title} 
                  
                  <span className={`${styles.dropdown_icon} ${
                    openGrade === index ? styles.open : ""
                  }`}>^</span>

                   </button>
                  {openGrade === index && (
                <div className={styles.drop_down_content}>
                  <h4>{item.content}</h4>
                </div>
              )}
                  </div>
              ))}
           </div>
        </div>
        <div className={styles.digital_lower_content} ref={lowerContainer}>
            <div className={styles.image_container}>
                <img src='/Assets/kiddies.png' alt='Kids Images'/>
            </div>
            <div className={styles.content_container}>
                <h1>INTRODUCTION TO DIGITAL SAFETY</h1>
                <p>At ITG we believe cybersecurity education starts early. Our kids and teen’s
cybersecurity programs are designed to empower young minds with the knowledge and
skills to navigate the digital world safely. Through engaging, age-appropriate activities,
we teach them how to recognize online threats, protect personal information, and
develop responsible digital habits.</p>
            </div>
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