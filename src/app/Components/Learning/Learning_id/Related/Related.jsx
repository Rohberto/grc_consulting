import React from 'react';
import { useRouter } from 'next/navigation';
import styles from "./Related.module.css";

const Related = () => {
    const router = useRouter();
    const content = [
        {
          id: "entry1",
          title: "Security Awareness Analyst",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/man_tech.png",
          price: 99.98
        },
        {
          id: "entry2",
          title: "Compliance Analyst",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/kid_group.png",
          price: 99.98
        },
        {
          id: "entry3",
          title: "Little Cyber Heroes",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/adult_group.png",
          price: 98.88
        },
        {
          id: "entry4",
          title: "Third Party Risk Analyst",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/teaching.png",
          price: 98.88
        },
      ]
  return (
    <div className={styles.banner_container}>
        <h1 className={styles.title}>Related Courses</h1>


        <div className={styles.grid}>
            {
        content.map((card, index) => (
            <div key={index} className={styles.card} onClick={() => {
              router.push(`/learning/${card.id}`)
            }}>
            <img src={card.image} alt={card.title} className={styles.image} />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
            <ul>
              <li>{card.lessons}</li>
            </ul>
            <span className={styles.label}>${card.price}</span>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Related