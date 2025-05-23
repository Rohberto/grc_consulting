"use client"
import React, {useState} from 'react';
import styles from "./Team.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Team = () => {
    const Info = [
        {title: "How GRC experts are working to transform our Compliance Strategy", description: "Our team consists of GRC professionals who are graduates of nationally ranked Cybersecurity degree programs and certification, courses. They have years of experience in the public and private sectors and a vast understanding of GRC frameworks.", icon: "/Assets/company1.png", company: "XYZ Company", location: "Santa Clara, CA", background: "light"},
        {title: "How GRC experts are working to transform our Compliance Strategy", description: "Our expert team is dedicated to helping organizaions navigate the complex landscape of governance, risk and compliance, while empowering the next generation of GRC professionals. With over 10 years of experience we posess the skills and knowledge needed to best equip you and your organization for the unpredictable future.", icon: "/Assets/company.png", company: "ABC Company", location: "Santa Clara, CA", background: "dark"},
        {title: "How GRC experts are working to transform our Compliance Strategy", description: "Our team consists of GRC professionals who are graduates of nationally ranked Cybersecurity degree programs and certification, courses. They have years of experience in the public and private sectors and a vast understanding of GRC frameworks.", icon: "/Assets/company1.png", company: "XYZ Company", location: "Santa Clara, CA", background: "light"},
        {title: "How GRC experts are working to transform our Compliance Strategy", description: "Our expert team is dedicated to helping organizaions navigate the complex landscape of governance, risk and compliance, while empowering the next generation of GRC professionals. With over 10 years of experience we posess the skills and knowledge needed to best equip you and your organization for the unpredictable future.", icon: "/Assets/company.png", company: "ABC Company", location: "Santa Clara, CA", background: "dark"},
        {title: "How GRC experts are working to transform our Compliance Strategy", description: "Our team consists of GRC professionals who are graduates of nationally ranked Cybersecurity degree programs and certification, courses. They have years of experience in the public and private sectors and a vast understanding of GRC frameworks.", icon: "/Assets/company1.png", company: "XYZ Company", location: "Santa Clara, CA", background: "light"},
        {title: "How GRC experts are working to transform our Compliance Strategy", description: "Our expert team is dedicated to helping organizaions navigate the complex landscape of governance, risk and compliance, while empowering the next generation of GRC professionals. With over 10 years of experience we posess the skills and knowledge needed to best equip you and your organization for the unpredictable future.", icon: "/Assets/company.png", company: "ABC Company", location: "Santa Clara, CA", background: "dark"},
     
    ]
    const [paused, setPaused] = useState(false);
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Facts About The Team.</h1>
    
        <Swiper 
       modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 } // Show full grid on large screens
            }}
            className={styles.swiper}>
                {Info.map((item, index) => (
                    <SwiperSlide key={index} className={`${styles.card} ${styles[item.background]}`}>
                       <div> <div className='box_image'>
                        <img src="/Assets/about_logo.png" alt="logo" />
                        </div> <h1>{item.title}</h1></div>
                        <p>{item.description}</p>
                        <div className={styles.bottom_content}>

                            <div className={styles.bottom_text}>
                                <h3>ITG GRC</h3>
                                <p>Houston, Tx</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
        
      </Swiper>

         </div>
  )
}

export default Team