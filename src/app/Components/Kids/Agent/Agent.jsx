import React from 'react';
import styles from "./Agent.module.css";

const Agent = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>Top Typing Agent Features</h1>

        <div className={styles.imageContainer}>
            <img src='/Assets/description.png' alt='description_image'/>    
        </div>    

        <img src="/Assets/sixth_left.png" className={styles.background_overlay_left} alt=''/>
        <img src="/Assets/sixth_right.png" className={styles.background_overlay_right} alt=''/>
      <div className={styles.wavy_image}>
        <img src="/Assets/wavy_6.png" alt='wavy image'/>
      </div>
    </div>
  )
}

export default Agent