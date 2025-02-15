import React from 'react';
import styles from "./DigitalDefender.module.css";

const DigitalDefender = () => {
  return (
    <div className={styles.container}>
        <div className={styles.digital_upper_content}>
            <h1>
                ITG Digital Defenders
            </h1>
            <p>Through our Digital Defenders program we strive to educate young learners on safe internet practices, digital citizenship, and the fundamentals of cybersecurity, with a special focus on online gaming safety.</p>
            <div className={styles.buttons_container}>
                <button className={styles.green_button}>K-2nd Grade</button>
                <button className={styles.white_button}>3-5th Grade</button>
                <button className={styles.white_button}>6-8th Grade</button>
                <button className={styles.white_button}>9-12th Grade</button>
            </div>
        </div>
        <div className={styles.digital_lower_content}>
            <div className={styles.image_container}>
                <img src='/Assets/kiddies.png' alt='Kids Images'/>
            </div>
            <div className={styles.content_container}>
                <h1>Introduction to Digital Safety.</h1>
                <p>Focus: We focus on exploring basic concepts of privacy, identifying trusted adults, and understanding "stranger danger" online.
                <br/>
                <br/>
                students will gain an understanding of knowing which games are age-appropriate and why it's important to only play with friends they know in real life.</p>
            </div>
        </div>
        <div className={styles.mobile_buttons}>
        <button className={styles.white_button}>3-5th Grade</button>
                <button className={styles.white_button}>6-8th Grade</button>
                <button className={styles.white_button}>9-12th Grade</button>
        </div>
        <img src="/Assets/second_left.png" className={styles.background_overlay_left} alt=''/>
        <img src="/Assets/second_right.png" className={styles.background_overlay_right} alt=''/>
      <div className={styles.wavy_image}>
        <img src="/Assets/wavy2.png" alt='wavy image'/>
      </div>
    </div>
  )
}

export default DigitalDefender