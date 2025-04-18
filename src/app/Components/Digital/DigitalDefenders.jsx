import styles from "./DigitalDefenders.module.css";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const DigitalDefenders = () => {


  const container = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  
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
          <img src="/Assets/kid3.jpg"  alt="Kid Learning" className={styles.smallImage} />
          <img src="/Assets/kid1.png" alt="Kid on Laptop" className={styles.largeImage} />
          <img src="/Assets/KID-ITG.png" alt="Kid on Laptop" className={styles.ImageLogo} />
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
            <li><strong>Online Learning:</strong> Self Pacedd, Kid-friendly modules designed tot teach online safety, digital citizenship and cybersecurity basics.</li>
            <li><strong>Customized Training:</strong> Tailored Curriculum and lessson plans for schools, after-school programs and community organizations.</li>
            <li><strong>Interactive Digital Activities:</strong>Hans-on games, quizzes and simulationthat help reinforce cyber safety lessons in a fun and engaging way.</li>
            <li><strong>Subscription-Based Content For Parents & Guardians: A monthly membership with age-appropriate lessons and resources - perfect for homeschoolers, remote learners and families looking to teach online safety at home.
              </strong>Hands-on games, quizzes and simulationthat help reinforce cyber safety lessons in a fun and engaging way.
              
              <ul>
                <li>Great For at-home Learning</li>
                <li>Includes videos, games, worksheets and activities.</li>
                <li>Aligned with digital literacy benchmarks.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DigitalDefenders;
