import styles from './Services.module.css';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
const Services = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
   gsap.to(`.${styles.serviceTag}`,{
      y: 0,
      opacity: 1,
      duration: .5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: container.current,
      start: "top bottom",
      end: "bottom top", 
      scrub: true
    }
    })
    gsap.to(`.${styles.heading}`, {
      y: 0,
      opacity: 1,
      duration: .5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top", 
        scrub: true
      }
    })
    gsap.to(`.${styles.description}`, {
      y: 0,
      opacity: 1,
      duration: .5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top", 
        scrub: true
      }
    })
    gsap.to(`.${styles.card}`, {
      x: 0,
      scale: 1,
      skewX: 0,
      duration: .5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "center top", 
        scrub: true
      }
    })
  })

  mm.add("(max-width: 768px)", () => {
    gsap.to(`.${styles.serviceTag}`,{
      y: 0,
      opacity: 1,
      duration: .5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: container.current,
      start: "top bottom",
      end: "top center", 
      scrub: true
    }
    })
    gsap.to(`.${styles.heading}`, {
      y: 0,
      opacity: 1,
      duration: .5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "top center", 
        scrub: true
      }
    })
    gsap.to(`.${styles.description}`, {
      y: 0,
      opacity: 1,
      duration: .5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "top center", 
        scrub: true
      }
    })
    gsap.to(`.${styles.card}`, {
      x: 0,
      scale: 1,
      skewX: 0,
      duration: .5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "center top", 
        scrub: true
      }
    })
  })
  })
  return (
    <section className={styles.servicesSection} ref={container}>
      <div className={styles.container}>
        <button className={styles.serviceTag}>Our Services</button>
        <h2 className={styles.heading}>
          Comprehensive Training and Consulting <br /> Solutions Tailored to Your Needs
        </h2>
        <p className={styles.description}>
          Unlock potential and achieve success with our personalized services for individuals and strategic consultations for businesses.
          Together, we create a sustainable future with growth and transformation.
        </p>

        <div className={styles.cardsContainer}>
          {/* Individual Services Card */}
          <div className={styles.card}>
            <h3>Individual offers for user services</h3>
            <p>Unlock your potential with our personalized individual services:</p>
            <ul>
              <li>Courses</li>
              <li>Learning Pathways</li>
              <li>Resume Reviews</li>
              <li>Interview Preparation</li>
              <li>LinkedIn Optimization</li>
              <li>Skills Development Workshops</li>
              <li>Members Only Club</li>
            </ul>
            <button className={styles.readMore}>Read More</button>
          </div>

          {/* GRC Solution Card */}
          <div className={styles.card}>
            <h3>GRC Solution for Businesses</h3>
            <p>Expert consulting services enable businesses to mitigate risks:</p>
            <ul>
              <li>Security Education & Awareness</li>
              <li>Policy Management</li>
              <li>Compliance Management</li>
              <li>Incident Response & Business Continuity</li>
              <li>Internal Audit & Assurance</li>
            </ul>
            <button className={styles.readMore}>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
