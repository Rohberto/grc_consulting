import React from 'react';
import styles from "./career.module.css";

const Career = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.career_header}>Career Pathway</h1>

        <div className={styles.image_container}>
            <img src="/Assets/career_chart.png" alt='career_chart'/>
        </div>
    </div>
  )
}

export default Career;