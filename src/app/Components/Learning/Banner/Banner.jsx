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

  function limitWords(text, maxWords) {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  }
  return (
    <div className={styles.banner_container}>
        <h1 className={styles.title}>ITG Learning Academy</h1>
        <p className={styles.subtitle}>
        Whether you're starting your GRC journey or advancing to leadership, the ITG Learning
Academy equips you with the tools and knowledge to achieve your goals and thrive in
today's evolving landscape. Explore our courses and join a community dedicated to
driving GRC excellence.
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
            <div key={index} className={`${styles.card}`} onClick={() => {
              router.push(`/learning/${card.id}`)
            }}>
              <div className={`${card?.completed ? styles.blur : ""}`}>
            <img src={card.image} alt={card.title} className={styles.image} />
            <h4>{card.title}</h4>
            <p>{`${limitWords(card.description, 30)}`}</p>
            <ul>
              <li>{card.lessons}</li>
            </ul>
            <span className={styles.label}>${card.price}</span>
           </div>
            {card?.completed && <div className={styles.darkOverlay}>Coming Soon</div>}
          </div>

         
          ))}
        </div>
        </div>
    </div>
  )
}

export default Banner