import React from 'react';
import styles from "./Homepage.module.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Homepage = () => {
    const tl1 = gsap.timeline();
       useGSAP(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            tl1.from(`.${styles.info_top_text} span`, {
                y: "100%",
                skewY: 10,
                opacity: 0,
                stagger: .5,
                duration: 1,
                ease: "power2.out"
            }).from(
                `.${styles.homepage_image_container} img`, {
                    x: "100%",
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out"
                  
                }, "<40%"
            ). from(`.${styles.info_regular_text}`
                , {
                  y: 100,
                  opacity: 0,
                  skewY: 10,
                  duration: 1,
                  stagger: .2,
                  ease: "power2.out"
                }).from(`.${styles.info_bottom_container} > *`, {
                    y: 100,
                    opacity: 0,
                    skewY: 10,
                    duration: 1,
                    stagger: .2,
                    ease: "power2.out"
                })
        })

        mm.add("(max-width: 768px)", () => {
            tl1.from(`.${styles.info_top_text} span`, {
                y: "100%",
                skewY: 10,
                opacity: 0,
                stagger: .5,
                duration: 1,
                ease: "power2.out"
            }, "<50%"). from(`.${styles.info_regular_text}`
                , {
                  y: 100,
                  opacity: 0,
                  skewY: 6,
                  duration: .6,
                  ease: "power2.out"
                }).from(
                    `.${styles.homepage_image_container} img`, {
                        x: "100%",
                        opacity: 0,
                        duration: 1,
                        ease: "power2.out"
                      
                    }
                ) .from(`.${styles.mobile_info_bottom_container} `, {
                    y: 100,
                    opacity: 0,
                    skewY: 10,
                    duration: 1,
                    stagger: .2,
                    ease: "power2.out"
                })
        })
       
    })
  return (
    <div className={styles.homepage_container}>
        <div className={styles.homepage_info_container}>
            
            <div className={styles.info_top_container}>
                <h1 className={styles.info_top_text}>
                   <span> Navigating Compliance.</span> 
                </h1>
                <h1 className={styles.info_top_text}>
                   <span>Mitigating Risk</span> 
                </h1>
                <h1 className={styles.info_top_text}>
                   <span>Enhancing Governance.</span> 
                </h1>
            
                <p className={styles.info_regular_text}>
                    Our expert team is dedicated to helping organizations navigate
                     the complex landscape of governance, risk, and 
                     compliance while nurturing the next generation of 
                     GRC professionals.
                </p>
            </div>

            <div className={styles.info_bottom_container}>
            <a href='#contact' rel='no_referrer'> <button className={styles.info_contact_button}>
                    Contact Us
                </button></a>

                <div className={styles.info_trusted}>
                    <p className={styles.info_trusted_text}>Trusted by Leading Brands</p>
                    <div className={styles.info_trusted_brands}>
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/comptia.png' alt='brand_logo'/>
                        </div>  
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/ISACA.png' alt='brand_logo'/>
                        </div>  
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/isc.png' alt='brand_logo'/>
                        </div>  
                    </div>
                </div>
            </div>

        </div>

        <div className={styles.homepage_image_container}>
            <img src='/Assets/home.png' alt='homepage graphic'/>
        </div>

        <div className={styles.mobile_info_bottom_container}>
            
                <a href='#contact' rel='no_referrer'> <button className={styles.info_contact_button}>
                    Contact Us
                </button></a>

                <div className={styles.info_trusted}>
                    <p className={styles.info_trusted_text}>Trusted by Leading Brands</p>
                    <div className={styles.info_trusted_brands}>
                    <div className={styles.info_trusted_brand}>
                            <img src='/Assets/comptia.png' alt='brand_logo'/>
                        </div>  
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/ISACA.png' alt='brand_logo'/>
                        </div>  
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/isc.png' alt='brand_logo'/>
                        </div>  
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Homepage