"use client"
import React, {useState} from 'react';
import styles from "./Banner.module.css";
import {useRouter } from 'next/navigation';
import {levels} from "../../../utils"; 
import Footer from '../../Footer/Footer';

const Banner = () => {
  const router = useRouter();
 
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
    </div>
  )
}

export default Banner