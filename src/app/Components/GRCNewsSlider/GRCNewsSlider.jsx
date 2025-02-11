"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./GRCNewsSlider.module.css";
import Image from "next/image";

const articles = [
  {
    title: "Creating a Culture of Safety Leadership",
    category: "Technology",
    description:
      "Learn how effective leadership can drive a strong safety culture, making organizations safer for workers.",
    image: "/Assets/culture.png",
  },
  {
    title: "Creating a Culture of Safety Leadership",
    category: "Technology",
    description:
      "Learn how effective leadership can drive a strong safety culture, making organizations safer for workers.",
    image: "/Assets/leadership.png",
  },
  {
    title: "Creating a Culture of Safety Leadership",
    category: "Technology",
    description:
      "Learn how effective leadership can drive a strong safety culture, making organizations safer for workers.",
    image: "/Assets/safety.png",
  },
  {
    title: "Creating a Culture of Safety Leadership",
    category: "Technology",
    description:
      "Learn how effective leadership can drive a strong safety culture, making organizations safer for workers.",
    image: "/Assets/culture.png",
  },
  {
    title: "Creating a Culture of Safety Leadership",
    category: "Technology",
    description:
      "Learn how effective leadership can drive a strong safety culture, making organizations safer for workers.",
    image: "/Assets/leadership.png",
  }
];

const GRCNewsSlider = () => {
  return (
    <section className={styles.container}>
        <p className={styles.tag}>Articles & Blogs</p>
      <h2>Keep up With The Latest in GRC News</h2>
      <Swiper 
       modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 } // Show full grid on large screens
            }}
            className={styles.swiper}>
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <Image src={article.image} alt={article.title} width={300} height={200} className={styles.image} />
              <div className={styles.content}>
                <span className={styles.category}>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href="#" className={styles.readMore}>Read More →</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GRCNewsSlider;
