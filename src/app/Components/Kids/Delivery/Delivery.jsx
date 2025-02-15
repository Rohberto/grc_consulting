import React from 'react';
import styles from "./Delivery.module.css";

const Delivery = () => {
  return (
    <div className={styles.delivery_container}>
        <h1 className={styles.delivery_header}>Delivery Modes</h1>
        <p className={styles.delivery_description}>
        Through our Digital Defenders program we strive to educate young learners on safe internet practices, digital citizenship, and the fundamentals of cybersecurity, with a special focus on online gaming safety.
        </p>
   
   <div className={styles.delivery_cards_container}>
        <div  className={`${styles.card} ${styles.card_one}`}>
            <div className={styles.card_image}>
                <img src="/Assets/frame.png" at="kids_frame"/>
            </div>
            <h3>Online Learning Platform</h3>
            <p>Self-paced courses with video lessons, interactive quizzes, and discussion forums</p>
        </div>
        <div className={`${styles.card} ${styles.card_two}`}>
            <div className={styles.card_image}>
                <img src="/Assets/frame1.png" at="kids_frame"/>
            </div>
            <h3>Customized training packages</h3>
            <p>Training programs developed based on the school or organizations needs</p>
        </div>
        <div className={`${styles.card} ${styles.card_three}`}>
            <div className={styles.card_image}>
                <img src="/Assets/frame2.png" at="kids_frame"/>
            </div>
            <h3>In-Person Workshops</h3>
            <p>Facilitated by trained instructors, available for school assemblies, classroom sessions, and community centers.</p>
        </div>
   </div>

   <img src="/Assets/third_left.png" className={styles.background_overlay_left} alt=''/>
        <img src="/Assets/third_right.png" className={styles.background_overlay_right} alt=''/>
      <div className={styles.wavy_image}>
        <img src="/Assets/wavy3.png" alt='wavy image'/>
      </div>
    </div>
  )
}

export default Delivery