import React from 'react';
import styles from "./Choose.module.css";

const Choose = () => {
    const content = [
        {title: "Tailored Solution For Every Business", description: "We provide customized Governance,Risk, and Compliance solutions designed to meet the unique needs of small, mid-sized, and large organizations.", image: "/Assets/choose1.png"},
        {title: "Expert-Led Training & Compliance Programs", description: "Our industry-certified experts offer role-based GRC training, security awareness programs, and compliance management to ensure your team stays ahead of regulatory requirements.", image: "/Assets/choose2.png"},
        {title: "Comprehensive Risk & Compliance Approach", description: "– From policy development to risk assessments and GRC technology solutions, we offer end-to-end support to strengthen your organization's security and compliance posture.", image: "/Assets/choose3.png"}
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