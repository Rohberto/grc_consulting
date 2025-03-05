import styles from "./GRCTraining.module.css";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const GRCTraining = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
   gsap.to(`.${styles.image}`,{
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
     scale: 1,
    duration: 2,
    ease: "power2",
    scrollTrigger: {
      trigger: container.current,
      start: "top bottom",
      end: "bottom top", 
      scrub: true
    }
    })
 
    gsap.to(`.${styles.content} > *`, {
      y: 0,
      opacity: 1,
      duration: .5,
      ease: "power2.out",
      stagger: .3,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "top top", 
        scrub: true
      }
    })
    
  })
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Empowering Organizations <br/> with Tailored GRC Training <br/> for Success</h1>
        <p>
          ITG GRC provides comprehensive GRC training solutions to equip employees with the skills needed to mitigate risks, ensure compliance and enhance cybersecurity. Our customized corporate training programs educate employees at all levels, fostering a well-informed and security-conscious workforce.
        </p>
        <button className={styles.button}>Learn More</button>
      </div>
      <div className={styles.imageContainer}>
        <img src="/Assets/training.png" alt="GRC Training" width={500} height={300} className={styles.image} />
      </div>
    </section>
  );
};

export default GRCTraining;