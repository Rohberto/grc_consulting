import React from 'react';
import styles from "./Program.module.css";

const Program = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>
            Why This Program?
        </h1>

        <div className={styles.content_container}>
            <div className={styles.text_container}>
                <ul>
                    <li><img src='/Assets/list_1.png' alt='list-counter'></img> Mission
                    Helps schools fulfill their digital citizenship requirements.</li>
                    <li><img src='/Assets/list_2.png' alt='list-counter'></img> Mission
2
Empowers students to become more responsible and aware digital users, especially in online gaming environments.</li>
                    <li><img src='/Assets/list_3.png' alt='list-counter'></img> Mission
3
Equips kids with the knowledge to stay safe and make smart decisions while gaming online.</li>
                </ul>
            </div>
            <div className={styles.image_container}>
                <img src="/Assets/kiddies_2.png" alt="kiddies_images"/>
            </div>
        </div>

        
   <img src="/Assets/fourth_left.png" className={styles.background_overlay_left} alt=''/>
        <img src="/Assets/fourth_right.png" className={styles.background_overlay_right} alt=''/>
      <div className={styles.wavy_image}>
        <img src="/Assets/wavy4.png" alt='wavy image'/>
      </div>
    </div>
  )
}

export default Program