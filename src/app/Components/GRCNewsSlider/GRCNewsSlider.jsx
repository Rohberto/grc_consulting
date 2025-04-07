"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./GRCNewsSlider.module.css";
import Image from "next/image";

const articles = [
  {
    title: "Cybersecurity Meets Governance: Winning the War Against Emerging Threats",
    category: "Technology",
    description:
      "It became truly prominent as a critical field in the mid-1990s to early 2000s, driven by the rapid growth of the internet and digital technology. In an era where digital innovation races ahead, cybersecurity faces unprecedented uncertainties. ",
    image: "/Assets/news.webp",
    link: "https://lazarussiafa.medium.com/cybersecurity-meets-governance-winning-the-war-against-emerging-threats-bf71c328f445"
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
       modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
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
                <a href={article.link ? `${article.link}` : "#"} target="_blank" className={styles.readMore}>Read More →</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GRCNewsSlider;
