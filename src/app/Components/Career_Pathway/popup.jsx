// components/Popup.jsx
"use client"
import { useState, useEffect } from 'react';
import styles from './Popup.module.css';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show popup on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Hide popup
  const hidePopup = () => {
    setIsVisible(false);
  };

  // Handle Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') hidePopup();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className={`${styles.popup} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.popupContent}>
        <span className={styles.close} onClick={hidePopup}>
          ×
        </span>
        <p className={styles.text}>
          Not sure where you fit in GRC? Take our quick GRC Career Discovery Quiz
          to find out which role best matches your strengths and interests—from
          Compliance professional to Risk professional and more.
        </p>
        <a href="https://www.itggrc.com/career-development" target="_blank" className={styles.quizLink}>
          Take the Quiz
        </a>
      </div>
    </div>
  );
};

export default Popup;