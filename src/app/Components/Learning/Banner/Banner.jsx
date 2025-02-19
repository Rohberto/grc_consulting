"use client"
import React, {useState} from 'react';
import styles from "./Banner.module.css";
 
const Banner = () => {
  const levels = [
    {
      id: "entry",
      label: "Entry Level",
      content: [
        {
          title: "Security Awareness Analyst",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/man_tech.png",
          price: 99.98
        },
        {
          title: "Compliance Analyst",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/kid_group.png",
          price: 99.98
        },
        {
          title: "Little Cyber Heroes",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/adult_group.png",
          price: 98.88
        },
        {
          title: "Third Party Risk Analyst",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/teaching.png",
          price: 98.88
        },
      ],
    },
    {
      id: "mid",
      label: "Mid-Level",
      content: [
        {
          title: "Military Fundamentals Course",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/kid_learning.png",
          price: 98.88
        },
      
        {
          title: "Transition and Leadership Training",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/man_tech.png",
          price: 98.88
        },
        {
          title: "Safe Surfing Academy For Kids",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/teaching.png",
          price: 98.88
        },
        {
          title: "Training for post Military success",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/tech_rays.png",
          price: 98.88
        },
      ],
    },
    {
      id: "senior",
      label: "Senior-Level",
      content: [
        {
          title: "Military Fundamentals Course",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/man_tech.png",
          price: 98.88
        },
        {
          title: "Transition and Leadership training",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/tech_woman.png",
          price: 98.88
        },
      ],
    },
  ];
  const [activeLevel, setActiveLevel] = useState("entry");
  // Find the current level object to get the label
  const currentLevel = levels.find((level) => level.id === activeLevel);
  return (
    <div className={styles.banner_container}>
        <h1 className={styles.title}>ITG Learning Academy</h1>
        <p className={styles.subtitle}>
        Through our Digital Defenders program we strive to educate young learners on safe internet practices, digital citizenship, and the fundamentals of cybersecurity, with a special focus on online gaming safety
        </p>

        <div className={styles.banner_buttons_container}>
        {levels.map((level) => (
          <button
            key={level.id}
            className={`${styles.button} ${activeLevel === level.id ? styles.active : ""}`}
            onClick={() => setActiveLevel(level.id)}
          >
            {level.label}
          </button>
        ))}
        </div>

        <div className={styles.section}>
        <h3> {currentLevel?.label}</h3>
          <div className={styles.grid}>
        {levels
          .find((level) => level.id === activeLevel)
          ?.content.map((card, index) => (
            <div key={index} className={styles.card}>
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
    </div>
  )
}

export default Banner