"use client"
import React from 'react';
import styles from "./Team.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Team = () => {
    const Info = [
        {title: "How a GRC Expert Transformed Our Compliance Strategy", description: "Our expert team is dedicated to helping organizaions navigate the complex landscape of governance,isk and compliance, while empowering the next generation of GRC professionals. With over 10 years of experience we posess the skills and knowledge needed to best equip you and your organization for the unpredictable future.", icon: "/Assets/company.png", company: "ABC Company", location: "Santa Clara, CA", background: "dark"},
        {title: "How a GRC Expert Transformed Our Compliance Strategy", description: "Our team consists of GRC professionals who are graduates of nationally ranked Cybersecurity degree programs and certification, courses. They have years of experience in the public and private sectors and a vast understanding of GRC frameworks.", icon: "/Assets/company1.png", company: "XYZ Company", location: "Santa Clara, CA", background: "light"},
        {title: "How a GRC Expert Transformed Our Compliance Strategy", description: "Our expert team is dedicated to helping organizaions navigate the complex landscape of governance,isk and compliance, while empowering the next generation of GRC professionals. With over 10 years of experience we posess the skills and knowledge needed to best equip you and your organization for the unpredictable future.", icon: "/Assets/company.png", company: "ABC Company", location: "Santa Clara, CA", background: "dark"},
        {title: "How a GRC Expert Transformed Our Compliance Strategy", description: "Our team consists of GRC professionals who are graduates of nationally ranked Cybersecurity degree programs and certification, courses. They have years of experience in the public and private sectors and a vast understanding of GRC frameworks.", icon: "/Assets/company1.png", company: "XYZ Company", location: "Santa Clara, CA", background: "light"},
        {title: "How a GRC Expert Transformed Our Compliance Strategy", description: "Our expert team is dedicated to helping organizaions navigate the complex landscape of governance,isk and compliance, while empowering the next generation of GRC professionals. With over 10 years of experience we posess the skills and knowledge needed to best equip you and your organization for the unpredictable future.", icon: "/Assets/company.png", company: "ABC Company", location: "Santa Clara, CA", background: "dark"},
        {title: "How a GRC Expert Transformed Our Compliance Strategy", description: "Our team consists of GRC professionals who are graduates of nationally ranked Cybersecurity degree programs and certification, courses. They have years of experience in the public and private sectors and a vast understanding of GRC frameworks.", icon: "/Assets/company1.png", company: "XYZ Company", location: "Santa Clara, CA", background: "light"}
    ]
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
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <div className={styles.bottom_content}>
                            <div className={styles.icon}>
                                <img src={item.icon} alt='icon logo'/>
                            </div>

                            <div className={styles.bottom_text}>
                                <h3>{item.company}</h3>
                                <p>{item.location}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
        
      </Swiper>

      <div className={styles.brand_marquee}>
        <div className={styles.marquee_content}>
        <img src='/Assets/fast_company.png' alt='brands associated with Grc'/>
        <img src='/Assets/USA.png' alt='brands associated with Grc'/>
        <img src='/Assets/wall.png' alt='brands associated with Grc'/>
        <img src='/Assets/CNBC.png' alt='brands associated with Grc'/>
        <img src='/Assets/Insider.png' alt='brands associated with Grc'/>
        <img src='/Assets/fast_company.png' alt='brands associated with Grc'/>
        <img src='/Assets/USA.png' alt='brands associated with Grc'/>
        <img src='/Assets/wall.png' alt='brands associated with Grc'/>
        <img src='/Assets/CNBC.png' alt='brands associated with Grc'/>
        <img src='/Assets/Insider.png' alt='brands associated with Grc'/>
        <img src='/Assets/fast_company.png' alt='brands associated with Grc'/>
        <img src='/Assets/USA.png' alt='brands associated with Grc'/>
        <img src='/Assets/wall.png' alt='brands associated with Grc'/>
        <img src='/Assets/CNBC.png' alt='brands associated with Grc'/>
        <img src='/Assets/Insider.png' alt='brands associated with Grc'/>
        <img src='/Assets/fast_company.png' alt='brands associated with Grc'/>
        <img src='/Assets/USA.png' alt='brands associated with Grc'/>
        <img src='/Assets/wall.png' alt='brands associated with Grc'/>
        <img src='/Assets/CNBC.png' alt='brands associated with Grc'/>
        <img src='/Assets/Insider.png' alt='brands associated with Grc'/>
      </div>
      </div>
    </div>
  )
}

export default Team