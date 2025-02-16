import React from 'react';
import styles from "./Choose.module.css";

const Choose = () => {
    const content = [
        {title: "Increase Workspace Produtivity", description: "Interactive, live remote classroom-style courses  tailored to specific roles within ", image: "/Assets/choose1.png"},
        {title: "Foster Team Growth", description: "Interactive, live remote classroom-style courses  tailored to specific roles within ", image: "/Assets/choose2.png"},
        {title: "Maximize Performance Potential", description: "Interactive, live remote classroom-style courses  tailored to specific roles within ", image: "/Assets/choose3.png"}
    ]
  return (
    <div className={styles.container}>
          <h2 className={styles.title}>Why Choose Us As Your <br/>GRC Experts?</h2>
      <p className={styles.subtitle}>
      At ITG GRC Consulting, we help businesses ensure compliance, mitigate risks, and strengthen governance with tailored solutions.
      </p>

      <div className={styles.grid}>
        {
            content.map((item, index) => (
                <div key={index} className={styles.card}>
            <div className={styles.image_container}><img src={item.image} alt="icon" width={40} height={40} /></div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.description}</p>
          </div>                    
            ))
        }
      </div>
    </div>
  )
}

export default Choose