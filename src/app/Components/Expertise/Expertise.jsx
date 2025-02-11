"use client"; // Ensure Swiper works in Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Expertise.module.css";



const Expertise = () => {
    const expertiseData = [
        {
          title: "GRC Solutions",
          image: "/Assets/solutions.png", 
          link: "#"
        },
        {
          title: "ITG Learning Academy",
          image: "/Assets/learning.png", 
          link: "#"
        },
        {
          title: "Career Development",
          image: "/Assets/career.png", 
          link: "#"
        },
        {
          title: "Government Contracts",
          image: "/Assets/govenment.png", 
          link: "#"
        }
      ];
  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        <button className={styles.tag}>Our Expertise</button>
        <h2 className={styles.heading}>Solutions Based Expertise</h2>
        <p className={styles.description}>
          Unlock potential and achieve success with our personalized services for individuals and strategic consultancy for businesses.
        </p>

        {/* Swiper for Tablets & Mobile */}
        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
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
