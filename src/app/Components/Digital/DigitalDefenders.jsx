import styles from "./DigitalDefenders.module.css";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const DigitalDefenders = () => {


  const container = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
   gsap.to(`.${styles.largeImage}`,{
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
   gsap.to(`.${styles.smallImage}`,{
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    scale: 1,
    delay: .5,
      duration: 2,
    ease: "power2",
    scrollTrigger: {
      trigger: container.current,
      start: "top bottom",
      end: "bottom top", 
      scrub: true
    }
    })
    gsap.to(`.${styles.textContainer} > *`, {
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
    <section className={styles.defendersSection} ref={container}>
      <div className={styles.container}>
        {/* Left Side - Images */}
        <div className={styles.imageContainer}>
          <img src="/Assets/kid1.png" alt="Kid Learning" className={styles.largeImage} />
          <img src="/Assets/smiley.jpg" alt="Kid on Laptop" className={styles.smallImage} />
        </div>

        {/* Right Side - Text */}
        <div className={styles.textContainer}>
          <span className={styles.tag}>For Kids</span>
          <h2 className={styles.heading}>ITG Digital Defenders</h2>
          <p className={styles.description}>
            Empowering individuals and organizations to excel in cybersecurity by providing
            comprehensive learning opportunities, tailored solutions, and expert-led guidance to
            build strong digital defenses and ensure success in the modern online world.
          </p>

          {/* Features */}
          <ul className={styles.features}>
            <li><strong>Online Learning:</strong> Self-paced courses with videos, quizzes, and forums.</li>
            <li><strong>Customized Training:</strong> Tailored programs for schools and organizations.</li>
            <li><strong>In-Person Workshops:</strong> Expert-led sessions for schools and community centers.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DigitalDefenders;
