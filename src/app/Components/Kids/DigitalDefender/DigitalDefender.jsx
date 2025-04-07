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
  const buttonData = [
    {
      id:1,
      title: 'K-2nd Grade',
      content: 'Focus: We focus on exploring basic concepts of privacy, identifying trusted adults, and understanding “stranger danger” online. Students will gain an understanding of knowing which games are age-appropriate and why it’s important to only play with friends they know in real life.',
      image: "/Assets/kiddies.png"
    },
    {
      id: 2,
      title: '3rd-5th Grade',
      content: 'Focus: We focus on safe browsing, recognizing secure websites, basic password creation, and understanding cyberbullying. Students will gain an understanding of in-game chat risks, not sharing personal information in games, and reporting suspicious behavior.',
      image: "/Assets/kiddies_2.png"
    },
    {
      id: 3,
      title: '6th-8th Grade',
      content: 'Focus: We focus on exploring Social media awareness, privacy settings, the importance of secure passwords, understanding phishing and smartphone best practices. Students will gain an understanding of recognizing scams and in-game purchases, using privacy settings on gaming platforms, and managing screen time.',
       image: "/Assets/kiddies_3.png"
    },
    {
      id: 4,
      title: '9th-12th Grade',
      content: 'Focus: We focus on cyber threats like phishing, ransomware, online scams, and digital footprints. Students will gain an understanding of digital currency, recognizing predatory behavior, and protecting personal information on streaming and social media platforms.',
       image: "/Assets/kiddies_4.png"
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
          start: "top bottom",
          end: "top center", 
          scrub: true
        }
      })
  })
  const [hoveredButton, setHoveredButton] = useState(1);
  return (
    <div className={styles.container} ref={container}>
        <div className={styles.digital_upper_content}>
            <h1>
               <span> ITG DIGITAL DEFENDERS</span>
            </h1>
            <p>Through our Digital Defenders program we strive to educate young learners on safe internet practices, digital citizenship, and the fundamentals of cybersecurity, with a special focus on online gaming safety.</p>
            <div className={styles.buttons_container}>
              {buttonData.map((button, index) => (
                <button
            key={button.id}
            className={`${styles.button} ${hoveredButton === button.id ? styles.white_button : styles.green_button}`}
            onMouseEnter={() => setHoveredButton(button.id)}
            onClick={() => setHoveredButton(button.id)}
          >
            {button.title}
          </button>
                  
              ))}
           </div>
        </div>
        <div className={styles.digital_lower_content} ref={lowerContainer}>
            <div className={styles.image_container}>
                <img src={buttonData.find((b) => b.id === hoveredButton)?.image || `/Assets/kiddies.png`} alt='Kids Images'/>
            </div>
            <div className={styles.content_container}>
                <h1>INTRODUCTION TO DIGITAL SAFETY</h1>
                <p>{buttonData.find((b) => b.id === hoveredButton).content}</p>
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