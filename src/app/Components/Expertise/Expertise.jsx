"use client"; // Ensure Swiper works in Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "./Expertise.module.css";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { useRouter } from "next/navigation";


const Expertise = () => {
  const router = useRouter();
    const expertiseData = [
        {
          title: "ITG Learning Academy",
          image: "/Assets/learning.png", 
          link: "/learning"
        },
        {
          title: "Career Development",
          image: "/Assets/career.png", 
          link: "/career_pathway"
        },
        {
          title: "Government Solutions",
          image: "/Assets/govenment.png", 
          link: "/consulting"
        },
        {
          title: "ITG Learning Academy",
          image: "/Assets/learning.png", 
          link: "/learning"
        },
        {
          title: "Career Development",
          image: "/Assets/career.png", 
          link: "/career_pathway"
        },
        {
          title: "Government Solutions",
          image: "/Assets/govenment.png", 
          link: "/consulting"
        }
      ];

      const container = useRef();

      useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
       gsap.to(`.${styles.tag}`,{
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
     /*   gsap.to(`.${styles.card}`, {
          x: 0,
          opacity: 1,
          duration: .5,
          stagger: .5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "top top", 
            scrub: true
          }
        })*/
      })
  return (
    <section className={styles.expertiseSection} ref={container}>
      <div className={styles.container}>
        <button className={styles.tag}>Our Expertise</button>
        <h2 className={styles.heading}>Solutions Based Expertise</h2>
        <p className={styles.description}>
          Unlock potential and achieve success with our personalized services for individuals and strategic consultancy for businesses.
        </p>

        {/* Swiper for Tablets & Mobile */}
        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            autoplay= {{delay: 3000, disableOnInteraction: false}}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 } // Show full grid on large screens
            }}
            className={styles.swiper}
          >
            {expertiseData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <img src={item.image} alt={item.title} className={styles.cardImage} />
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <a href={item.link} className={styles.learnMore}>Learn More →</a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
