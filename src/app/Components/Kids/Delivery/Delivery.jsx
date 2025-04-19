"use client"
import React, {useRef, useState} from 'react';
import styles from "./Delivery.module.css";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


const Delivery = () => {
  const container = useRef();
  const cardContainer = useRef();
  const [isDownloading, setIsDownloading] = useState(false);

  const crosswordDownload = [
    '/Assets/crossword_1.jpg',
    '/Assets/crossword_2.jpg',
    '/Assets/crossword_3.jpg',
    '/Assets/crossword_4.jpg',
  ];
  const badgesDownload = [
    '/Assets/badge.jpg',
    '/Assets/badge_1.jpg',
  ];
  const pledgeDownload = [
    '/Assets/pledge.jpg',
];
/*
const handleDownload = (filesToDownload) => {
  try {
    setIsDownloading(true);

    // Trigger download for each file
    filesToDownload.forEach((file) => {
      // Create a temporary link element for each file
      const link = document.createElement('a');
      link.href = file; // Direct URL to the file in the public folder
      link.download = file.split('/').pop(); // Use the file name for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  } catch (error) {
    console.error('Error downloading files:', error);
    alert('Failed to download some files');
  } finally {
    setIsDownloading(false);
  }
};
*/

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
            <h3>Crossword Puzzles Grades k-12 </h3>
            <p>The ITG Digital Defender Crossword Puzzle is a fun and educational activity designed to help kids in (K-2nd,3rd-5th,6th-8th,9-12) learn key cybersecurity terms and concepts. This engaging puzzle challenges participants to solve clues related to online safety, digital citizenship, and responsible gaming.
<br/>
<br/>
Download the crossword today and let your child become a savvy cyber defender while having fun!
</p>
            <button className={styles.download_button}>
            <a
      href="/Assets/crossword.pdf"
      download
    style={{
      textDecoration: "none",
      color: "#fff"
    }}
    >
      Download Crosswords
    </a>
    </button>
        </div>
        <div className={`${styles.card} ${styles.card_two}`}>
            <div className={styles.card_image}>
                <img src="/Assets/frame1.png" at="kids_frame"/>
            </div>
            <h3>Cyber Pledges grades k-12</h3>
            <p>The ITG Digital Defenders Pledge empowers kids and teens to commit to safe and responsible online behaviors. By taking the pledge, participants promise to protect their personal information, think before they click, and help create a safer digital community. This pledge is a fun and engaging way for young learners to become confident cyber citizens and champions of cybersecurity awareness.
<br/>
<br/>
Encourage your child to take the pledge today and join the ITG Digital Defenders in safeguarding the online world!
</p>
           <button 
      className={styles.download_button}>
     <a
      href="/Assets/pledge.pdf"
      download
    style={{
      textDecoration: "none",
      color: "#fff"
    }}
    >
      Download Pledge
    </a>
    </button>
        </div>
        <div className={`${styles.card} ${styles.card_three}`}>
            <div className={styles.card_image}>
                <img src="/Assets/frame2.png" at="kids_frame"/>
            </div>
            <h3>ITG Digital Defenders Color Badge</h3>
            <p>The ITG Digital Defender Badge Coloring Sheet lets kids unleash their creativity while learning about cybersecurity! This fun activity encourages children to color and design their own badge, symbolizing their role as a Digital Defender. They can add words, symbols, and drawings that reflect what online safety means to them.
<br/>
<br/>
Download the badge today and let your child proudly show their commitment to staying safe online!
</p>
             <button
      className={styles.download_button}>
         <a
      href="/Assets/badge.pdf"
      download
    style={{
      textDecoration: "none",
      color: "#fff"
    }}
    >
      Download Badges
    </a>
    </button>
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