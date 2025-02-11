import React from 'react';
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage_container}>
        <div className={styles.homepage_info_container}>
            
            <div className={styles.info_top_container}>
                <h1 className={styles.info_top_text}>
                    Navigating Compliance. <br/>
                    Mitigating Risk. <br/>
                    Enhancing Governance.
                </h1>
            
                <p className={styles.info_regular_text}>
                    Our expert team is dedicated to helping organizations navigate
                     the complex landscape of governance, risk, and 
                     compliance while nurturing the next generation of 
                     GRC professionals.
                </p>
            </div>

            <div className={styles.info_bottom_container}>
                <button className={styles.info_contact_button}>
                    Contact Us
                </button>

                <div className={styles.info_trusted}>
                    <p className={styles.info_trusted_text}>Trusted by Leading Brands</p>
                    <div className={styles.info_trusted_brands}>
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/Greenish.png' alt='brand_logo'/>
                        </div>  
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/Automation.png' alt='brand_logo'/>
                        </div>  
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/Leafe.png' alt='brand_logo'/>
                        </div>  
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/mindful.png' alt='brand_logo'/>
                        </div>  
                    </div>
                </div>
            </div>

        </div>

        <div className={styles.homepage_image_container}>
            <img src='/Assets/home.png' alt='homepage graphic'/>
        </div>

        <div className={styles.mobile_info_bottom_container}>
                <button className={styles.info_contact_button}>
                    Contact Us
                </button>

                <div className={styles.info_trusted}>
                    <p className={styles.info_trusted_text}>Trusted by Leading Brands</p>
                    <div className={styles.info_trusted_brands}>
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/Greenish.png' alt='brand_logo'/>
                        </div>  
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/Automation.png' alt='brand_logo'/>
                        </div>  
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/Leafe.png' alt='brand_logo'/>
                        </div>  
                        <div className={styles.info_trusted_brand}>
                            <img src='/Assets/mindful.png' alt='brand_logo'/>
                        </div>  
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Homepage